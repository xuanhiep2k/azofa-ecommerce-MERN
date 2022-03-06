const connectDB = require("./config/db");
const productsData = require("./data/productsData");
const productModel = require("./models/productModel");

connectDB();
const importData = async() =>{
    try {
        await productModel.deleteMany({});

        await productModel.insertMany(productsData);

        console.log('Import Data success');
    } catch (error) {
        console.log('Error when import data');
        process.exit(1);
    }
}

importData();