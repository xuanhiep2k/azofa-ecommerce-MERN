const dotenv = require('dotenv');
const cloudinary = require('cloudinary');

dotenv.config({path: 'config.env'});

module.exports = cloudinary;