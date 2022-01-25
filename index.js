const express = require('express');
const dotenv = require('dotenv');
dotenv.config({
    path: './.env'
})
const app = express();

app.listen(process.env.PORT || 5000, () => {
    console.log(`app listening on port 5000`);
})