const User = require('../models/User');
const crypto = require('crypto');
const { use } = require('express/lib/router');

const auth = {
    //login
    login: async(req, res, next) =>{
        const {email, password} = req.body;
        
        if (!email || !password) {
            return next(new ErrorResponse("Please provide an email and password", 400));
        }
    
        try {
        // Check that user exists by email
        const user = await User.findOne({ email }).select("+password");
    
        if (!user) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }
    
        // Check that password match
        const isMatch = await user.matchPassword(password);
    
        if (!isMatch) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }
        
        sendToken(user, 200, res);
        
        } catch (err) {
            next(err);
        }
    },
    register: async(req, res, next) =>{
        const { username, email, password } = req.body;

        try {
            const user = await User.create({
            username,
            email,
            password,
            });

            sendToken(user, 200, res);
        } catch (err) {
            next(err);
        }
    },
    forgotPassword: async(req, res, next) =>{

    },
    resetPassword: async(req, res, next) =>{
        
    }
    
}

//send token
const sendToken = (user, statusCode, res) => {
    const username = user.username;
    const token = user.getSignedJwtToken();
    res.status(statusCode).json({ sucess: true, token, username });
};

module.exports = auth;