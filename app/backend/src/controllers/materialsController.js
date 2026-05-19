const db = require('../config/db');
const { uploadToBlob } = require('../config/blob');

// ======================
// GET ALL MATERIALS
// ======================

const getMaterials = async (req, res) => {

  try {

    const [rows] = await db.query(
      `
      SELECT 
        id,
        title,
        description,
        filename,
        blob_url,
        user_id,
        created_at
      FROM materials
      ORDER BY created_at DESC
      `
    );

    res.json({
      success: true,
      data: rows
    });

  } catch (error) {

    console.log('GET MATERIALS ERROR');
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Failed to fetch materials',
      error: error.message
    });

  }

};

// ======================
// GET MATERIAL DETAIL
// ======================

const getMaterialById = async (req, res) => {

  try {

    const { id } = req.params;

    const [rows] = await db.query(
      `
      SELECT 
        id,
        title,
        description,
        filename,
        blob_url,
        user_id,
        created_at
      FROM materials
      WHERE id = ?
      `,
      [id]
    );

    if (rows.length === 0) {

      return res.status(404).json({
        success: false,
        message: 'Material not found'
      });

    }

    res.json({
      success: true,
      data: rows[0]
    });

  } catch (error) {

    console.log('GET DETAIL ERROR');
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Failed to fetch material detail',
      error: error.message
    });

  }

};

// ======================
// CREATE MATERIAL + FILE
// ======================

const createMaterialWithFile = async (req, res) => {

  try {

    console.log('BODY:', req.body);
    console.log('FILE:', req.file);

    let { title, description } = req.body;

    title = title?.trim() || '';
    description = description?.trim() || '';

    // VALIDASI TITLE
    if (!title) {

      return res.status(400).json({
        success: false,
        message: 'Title is required'
      });

    }

    // VALIDASI FILE
    if (!req.file) {

      return res.status(400).json({
        success: false,
        message: 'File is required'
      });

    }

    // ======================
    // UPLOAD KE AZURE BLOB
    // ======================

    let blobUrl = null;

    try {

      blobUrl =
        await uploadToBlob(req.file);

      console.log(
        'BLOB URL:',
        blobUrl
      );

    } catch (blobError) {

      console.log('BLOB ERROR');
      console.log(blobError);

    }

    if (!blobUrl) {
      return res.status(500).json({
        success: false,
        message: 'Failed to upload file to blob storage'
      });
    }

    // ======================
    // INSERT DATABASE
    // ======================

    const [result] = await db.query(
      `
      INSERT INTO materials
      (
        title,
        description,
        filename,
        blob_url,
        user_id
      )
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        title,
        description || null,
        req.file.originalname,
        blobUrl,
        req.user?.id || null
      ]
    );

    res.status(201).json({
      success: true,
      message: 'Material uploaded successfully',
      data: {
        id: result.insertId,
        title,
        description,
        filename: req.file.originalname,
        blob_url: blobUrl
      }
    });

  } catch (error) {

    console.log('UPLOAD ERROR');
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Failed to upload material',
      error: error.message
    });

  }

};

// ======================
// UPDATE MATERIAL
// ======================

const updateMaterial = async (req, res) => {

  try {

    const { id } = req.params;

    let {
      title,
      description
    } = req.body;

    title = title?.trim() || '';
    description = description?.trim() || '';

    // VALIDASI
    if (!title) {

      return res.status(400).json({
        success: false,
        message: 'Title wajib diisi'
      });

    }

    // CEK MATERIAL
    const [rows] = await db.query(
      'SELECT * FROM materials WHERE id = ?',
      [id]
    );

    if (rows.length === 0) {

      return res.status(404).json({
        success: false,
        message: 'Material tidak ditemukan'
      });

    }

    // UPDATE
    await db.query(
      `
      UPDATE materials
      SET
        title = ?,
        description = ?
      WHERE id = ?
      `,
      [
        title,
        description,
        id
      ]
    );

    res.json({
      success: true,
      message: 'Material berhasil diupdate'
    });

  } catch (error) {

    console.log('UPDATE ERROR');
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Gagal update material',
      error: error.message
    });

  }

};

// ======================
// DELETE MATERIAL
// ======================

const deleteMaterial = async (req, res) => {

  try {

    const { id } = req.params;

    // CEK MATERIAL
    const [rows] = await db.query(
      'SELECT * FROM materials WHERE id = ?',
      [id]
    );

    if (rows.length === 0) {

      return res.status(404).json({
        success: false,
        message: 'Material tidak ditemukan'
      });

    }

    // ONLY ADMIN CAN DELETE
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Akses ditolak: hanya admin yang boleh menghapus material'
      });
    }

    // DELETE
    await db.query(
      'DELETE FROM materials WHERE id = ?',
      [id]
    );

    res.json({
      success: true,
      message: 'Material berhasil dihapus'
    });

  } catch (error) {

    console.log('DELETE ERROR');
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Gagal menghapus material',
      error: error.message
    });

  }

};

// ======================
// EXPORT
// ======================

module.exports = {
  getMaterials,
  getMaterialById,
  createMaterialWithFile,
  updateMaterial,
  deleteMaterial
};