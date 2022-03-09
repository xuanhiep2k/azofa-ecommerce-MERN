const connectDB = require("./config/db");
const userModel = require('./models/User');
const userData = require('./data/userData');
const productsData = require("./data/productsData");
const productModel = require("./models/Product");

connectDB();

const importData = async() =>{
    try {
        await productModel.deleteMany({});
        await userModel.deleteMany({});

        await productModel.insertMany(productsData);
        await userModel.insertMany(userData);

        console.log('Import Data success');
    } catch (error) {
        console.log(error)
        console.log('Error when import data');
        process.exit(1);
    }
}

importData();