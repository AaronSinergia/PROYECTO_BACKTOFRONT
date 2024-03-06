const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storageEvents = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'eventsIMG',
    allow: ['jpg', 'jpeg', 'gif', 'png', 'webp'],
  },
});

const upload = multer({ storage: storageEvents });

module.exports = upload;
