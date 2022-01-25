const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect('http://localhost/authDb', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }catch(err) {
        console.log(err.message);
    }
}
module.exports = dbConnect;