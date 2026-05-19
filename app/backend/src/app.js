const express = require('express');

const cors = require('cors');

const helmet = require('helmet');

const rateLimit = require('express-rate-limit');

require('dotenv').config();

const materialsRoutes =
  require('./routes/materialsRoutes');

const authRoutes =
  require('./routes/authRoutes');

const app = express();

// ======================
// RATE LIMITER
// ======================

const limiter = rateLimit({

  // 1 menit
  windowMs: 1 * 60 * 1000,

  // maksimal request
  max: 100,

  message: {
    success: false,
    message:
      'Too many requests, please try again later.'
  }

});

// ======================
// MIDDLEWARE
// ======================

app.use(cors());

// HELMET SECURITY
app.use(helmet());

// RATE LIMIT
app.use(limiter);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);

// ======================
// HEALTH CHECK
// ======================

app.get('/health', (req, res) => {

  res.json({
    status: 'OK',
    message: 'Backend is running'
  });

});

// ======================
// ROUTES
// ======================

// MATERIAL ROUTES
app.use(
  '/materials',
  materialsRoutes
);

// AUTH ROUTES
app.use(
  '/auth',
  authRoutes
);

// ======================
// NOT FOUND HANDLER
// ======================

app.use((req, res) => {

  res.status(404).json({
    success: false,
    message: 'Route not found'
  });

});

// ======================
// GLOBAL ERROR HANDLER
// ======================

app.use((error, req, res, next) => {

  console.log('GLOBAL ERROR');

  console.log(error);

  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: error.message
  });

});

// ======================
// PORT
// ======================

const PORT =
  process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});