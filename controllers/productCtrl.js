const Products = require('../models/productModel');

const productCtrl = {
    getProducts: async(req, res) =>{
        try {
            const products = await Products.find();

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
    }
}

module.exports = productCtrl;