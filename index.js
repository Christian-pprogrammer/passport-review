const express = require('express');
const dbConnect = require('./config/database');
const dotenv = require('dotenv');
dotenv.config({
    path: './.env'
})
dbConnect();
const app = express();
app.use(express.json());
app.listen(process.env.PORT || 5000, () => {
    console.log(`app listening on port 5000`);
})