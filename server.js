const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

dotenv.config({path: 'config.env'});
const port = process.env.PORT || 8000;

//use JSON
app.use(express.json());

//parser request to body-parser
app.use(bodyParser.urlencoded({extended: true}));

//connect to mongooseDB
connectDB();

//use routers
app.use('/api', require('./routes/productRouter'));
app.use('/api/auth', require('./routes/auth'));

app.listen(port, () =>{
    console.log(`PORT: ${port}`)
})