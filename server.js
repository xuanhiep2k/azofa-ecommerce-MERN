const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

//use JSON
app.use(express.json());

//parser request to body-parser
app.use(bodyParser.urlencoded({extended: true}));

dotenv.config({path: 'config.env'});
const port = process.env.PORT || 8000;

//connect to mongooseDB
connectDB();

//use routers
app.use('/api', require('./routes/productRouter'));

app.listen(port, () =>{
    console.log(`PORT: ${port}`)
})