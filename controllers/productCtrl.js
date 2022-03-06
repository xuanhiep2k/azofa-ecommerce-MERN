const Product = require('../models/productModel');

const productCtrl = {
    getProducts: async(req, res) =>{
        try {
            const products = await Product.find({});

            res.json({
                status: 'success',
                result: products.length,
                products: products
            })
        } catch (error) {
            return res.status(500).json({
                msg: error.message
            })
        }
    },
    getProductById: async(req, res) =>{
        try {
            const product = await Product.findById(req.params.id);

            req.json({
                status: 'success',
                product: product
            })
        } catch (error) {
            return res.status(500).json({
                msg: error.message
            })
        }
    }
}

module.exports = productCtrl;