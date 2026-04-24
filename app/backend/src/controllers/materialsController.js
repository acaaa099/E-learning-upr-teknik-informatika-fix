const db = require('../config/db');

const getMaterials = async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT id, title, description, filename, blob_url, created_at FROM materials ORDER BY created_at DESC'
    );

    res.json({
      success: true,
      data: rows
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch materials',
      error: error.message
    });
  }
};

const getMaterialById = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query(
      'SELECT id, title, description, filename, blob_url, created_at FROM materials WHERE id = ?',
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
    res.status(500).json({
      success: false,
      message: 'Failed to fetch material detail',
      error: error.message
    });
  }
};

const createMaterial = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: 'Title is required'
      });
    }

    const [result] = await db.query(
      'INSERT INTO materials (title, description) VALUES (?, ?)',
      [title, description || null]
    );

    res.status(201).json({
      success: true,
      message: 'Material created successfully',
      data: {
        id: result.insertId,
        title,
        description: description || null
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create material',
      error: error.message
    });
  }
};

module.exports = {
  getMaterials,
  getMaterialById,
  createMaterial
};
