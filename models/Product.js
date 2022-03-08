const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        require: true
    },
    img:{
        type: String,
        trim: true,
        require: true
    },
    price:{
        type: Number,
        trim: true,
        require: true
    },
    unit:{
        type: String,
        trim: true,
        require: true
    },
    qty:{
        type: Number,
        trim: true,
        required: true
    },
    description:{
        type: String,
        trim: true,
        required: true
    },
    desDetails:{
        type: String,
        trim: true,
        required: true
    }
},{
    timestamps: true //important
})

module.exports = mongoose.model('Products', productSchema);