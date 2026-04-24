const express = require('express');
const router = express.Router();

// sementara kosong dulu
router.get('/', (req, res) => {
  res.json({ message: 'Materials route working' });
});

module.exports = router;
