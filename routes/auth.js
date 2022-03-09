const express = require('express');
const router = express.Router();

//import Controllers
const { login, register, forgotPassword, resetPassword, logout } = require('../controllers/auth');

//login
router.post('/login', login);

//register
router.post('/register', register);

//forgotPassword
router.get('/forgotpassword', forgotPassword);

//passwordReset
router.get('/resetpassword', resetPassword);

module.exports = router;