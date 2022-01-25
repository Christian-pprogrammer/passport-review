const bcrypt = require('bcrypt');
const { User } = require('../models/User');
exports.registerUser = async (req,res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        await newUser.save()
        console.log('saved successfully');
        return res.status(200).json({
            message: 'registered successfully'
        })
    }catch(err) {
        res.status(400).json({
            error: err.message
        })
    }
}