const express = require('express');

const router = express.Router();

const upload =
  require('../middlewares/uploadMiddleware');

const {
  verifyToken,
  isAdmin
} = require('../middlewares/authMiddleware');

const {
  getMaterials,
  getMaterialById,
  createMaterialWithFile,
  updateMaterial,
  deleteMaterial
} = require('../controllers/materialsController');

// ======================
// PUBLIC ROUTES
// ======================

// GET ALL MATERIALS
router.get(
  '/',
  getMaterials
);

// GET MATERIAL DETAIL
router.get(
  '/:id',
  getMaterialById
);

// ======================
// ADMIN ROUTES
// ======================

// CREATE MATERIAL
router.post(
  '/',
  verifyToken,
  isAdmin,
  upload.single('file'),
  createMaterialWithFile
);

// UPDATE MATERIAL
router.put(
  '/:id',
  verifyToken,
  isAdmin,
  updateMaterial
);

// DELETE MATERIAL (allow owner or admin)
router.delete(
  '/:id',
  verifyToken,
  deleteMaterial
);

module.exports = router;