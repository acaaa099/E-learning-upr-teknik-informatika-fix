const express = require('express');
const router = express.Router();

const {
  getMaterials,
  getMaterialById,
  createMaterial
} = require('../controllers/materialsController');

router.get('/', getMaterials);
router.get('/:id', getMaterialById);
router.post('/', createMaterial);

module.exports = router;
