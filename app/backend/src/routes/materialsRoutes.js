const express = require('express');
const router = express.Router();

const {
  getMaterials
} = require('../controllers/materialsController');

router.get('/', getMaterials);

module.exports = router;
