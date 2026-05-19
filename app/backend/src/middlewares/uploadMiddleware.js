const multer = require('multer');

// MEMORY STORAGE
const storage = multer.memoryStorage();

// VALIDASI FILE
const fileFilter = (req, file, cb) => {

  const allowedTypes = [

    'video/mp4',
    'video/mpeg',

    'application/pdf',

    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',

    'application/vnd.openxmlformats-officedocument.presentationml.presentation',

    'image/jpeg',
    'image/png'

  ];

  if (allowedTypes.includes(file.mimetype)) {

    cb(null, true);

  } else {

    cb(
      new Error('File type not allowed'),
      false
    );

  }

};

const upload = multer({

  storage,

  limits: {

    // 50MB
    fileSize: 50 * 1024 * 1024

  },

  fileFilter

});

module.exports = upload;