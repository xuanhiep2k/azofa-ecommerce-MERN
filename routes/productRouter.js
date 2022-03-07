const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById } = require('../controllers/productCtrl');

//get all products from mongooseDB
//get api/products
router.get('/products', getAllProducts);

//get a product by id
//get api/product/:id
router.get('/product/:id', getProductById);

module.exports = router;