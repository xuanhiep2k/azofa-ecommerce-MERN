const Product = require('../models/Product');

const productCtrl = {
    //get all products
    getAllProducts: async(req, res) =>{
        try {
            const products = await Product.find({});

            res.json(products);
        } catch (error) {
            return res.status(500).json({
                msg: error.message
            })
        }
    },
    //get a product by id
    getProductById: async(req, res) =>{
        try {
            const product = await Product.findById(req.params.id);

            res.json(product)
        } catch (error) {
            return res.status(500).json({
                msg: error.message
            })
        }
    }
}

module.exports = productCtrl;