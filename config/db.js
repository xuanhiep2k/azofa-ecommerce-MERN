const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({path: 'config.env'});

//connect to DB
const connectDB = async() =>{
    const URI = process.env.MONGOOSE_URI;

    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Connected to DB');
    } catch (error) {
        console.log('Connect to DB false');
        process.exit(1);
    }
}

module.exports = connectDB;