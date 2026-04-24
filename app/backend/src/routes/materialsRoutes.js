const express = require('express');
const router = express.Router();

const upload = require('../middlewares/uploadMiddleware');

const {
  getMaterials,
  getMaterialById,
  createMaterial,
  uploadMaterialFile
} = require('../controllers/materialsController');

router.get('/', getMaterials);
router.get('/:id', getMaterialById);
router.post('/', createMaterial);
router.post('/:id/upload', upload.single('file'), uploadMaterialFile);

module.exports = router;
