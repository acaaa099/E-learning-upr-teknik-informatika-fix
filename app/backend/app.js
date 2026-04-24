const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// route simple dulu
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Backend is running'
  });
});

// port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
