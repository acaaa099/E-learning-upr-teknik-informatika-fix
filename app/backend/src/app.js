const express = require('express');
const cors = require('cors');
require('dotenv').config();

const materialsRoutes = require('./routes/materialsRoutes');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Backend is running'
  });
});

// REGISTER ROUTES
app.use('/materials', materialsRoutes);

// port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
