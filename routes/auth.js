const express = require('express');
const router = express.Router();

//import Controllers
const { login, register, forgotPassword, resetPassword } = require('../controllers/auth');

//all Controllers

//login
router.get('/login', login);

//register
router.get('/register', register);

//forgotPassword
router.get('/forgotpassword', forgotPassword);

//passwordReset
router.get('/resetpassword', resetPassword);

module.exports = router;