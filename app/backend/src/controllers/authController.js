const db = require('../config/db');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

// ======================
// REGISTER
// ======================

const register = async (req, res) => {

  try {

    const {
      name,
      email,
      password,
      role
    } = req.body;

    // VALIDASI
    if (
      !name ||
      !email ||
      !password
    ) {

      return res.status(400).json({
        success: false,
        message: 'Semua field wajib diisi'
      });

    }

    // CEK EMAIL
    const [existingUser] =
      await db.query(
        'SELECT * FROM users WHERE email = ?',
        [email]
      );

    if (existingUser.length > 0) {

      return res.status(400).json({
        success: false,
        message: 'Email sudah digunakan'
      });

    }

    // HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // DEFAULT ROLE
    const userRole =
      role || 'student';

    // INSERT USER
    const [result] =
      await db.query(
        `
        INSERT INTO users
        (
          name,
          email,
          password,
          role
        )
        VALUES (?, ?, ?, ?)
        `,
        [
          name,
          email,
          hashedPassword,
          userRole
        ]
      );

    res.status(201).json({
      success: true,
      message: 'Register berhasil',
      data: {
        id: result.insertId,
        name,
        email,
        role: userRole
      }
    });

  } catch (error) {

    console.log('REGISTER ERROR');
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Register gagal',
      error: error.message
    });

  }

};

// ======================
// LOGIN
// ======================

const login = async (req, res) => {

  try {

    const {
      email,
      password
    } = req.body;

    // VALIDASI
    if (
      !email ||
      !password
    ) {

      return res.status(400).json({
        success: false,
        message: 'Email dan password wajib diisi'
      });

    }

    // CEK USER
    const [rows] =
      await db.query(
        'SELECT * FROM users WHERE email = ?',
        [email]
      );

    if (rows.length === 0) {

      return res.status(400).json({
        success: false,
        message: 'User tidak ditemukan'
      });

    }

    const user = rows[0];

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {

      return res.status(400).json({
        success: false,
        message: 'Password salah'
      });

    }

    // ======================
    // JWT TOKEN
    // ======================

    const token =
      jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role
        },
        process.env.JWT_SECRET || 'SECRET_KEY',
        {
          expiresIn: '1d'
        }
      );

    res.json({
      success: true,
      message: 'Login berhasil',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {

    console.log('LOGIN ERROR');
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Login gagal',
      error: error.message
    });

  }

};

module.exports = {
  register,
  login
};