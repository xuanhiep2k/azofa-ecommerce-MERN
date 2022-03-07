const dotenv = require('dotenv');
const cloudinary = require('cloudinary');

dotenv.config({path: 'config.env'});
const CLOUD_NAME = process.env.CLOUD_NAME;
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

cloudinary.config({
    CLOUD_NAME: CLOUD_NAME,
    API_KEY: API_KEY,
    API_SECRET: API_SECRET
});

module.exports = cloudinary;