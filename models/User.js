const { Schema, Model } = require('mongoose');
const userSchema = new Schema({
    username: String,
    email: String,
    password: String
})

module.exports.User = Model("User", userSchema);