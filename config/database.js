const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb://localhost/passport-express', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connected to db...');
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = dbConnect;
