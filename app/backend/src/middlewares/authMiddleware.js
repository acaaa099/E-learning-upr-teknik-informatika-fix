const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {

  try {

    const authHeader =
      req.headers.authorization;

    if (!authHeader) {

      return res.status(401).json({
        success: false,
        message: 'Token tidak ada'
      });

    }

    const token =
      authHeader.split(' ')[1];

    const decoded =
      jwt.verify(
        token,
        process.env.JWT_SECRET || 'SECRET_KEY'
      );

    req.user = decoded;

    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: 'Token invalid'
    });

  }

};

const isAdmin = (req, res, next) => {

  if (req.user.role !== 'admin') {

    return res.status(403).json({
      success: false,
      message: 'Akses admin saja'
    });

  }

  next();

};

module.exports = {
  verifyToken,
  isAdmin
};