const User = require('../models/User');
const bcrypt = require('bcryptjs');
exports.signupController = async (req, res) => {
    const {username, email, password1} = req.body;
    try{
        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(400).json({
                errorMessage: 'This email already exists',
            });
        }
        const newUser = new User();
        newUser.username = username;
        newUser.email = email;

        const salt = await bcrypt.genSalt(10);
        newUser.password1 = await bcrypt.hash(password1,salt);

        await newUser.save();
        res.json({
            successMessage: 'Registration success'
        });

    } catch{
        console.log('signupController error: ', err)
        res.status(500).json({
            errorMessage: 'Server error',
        });
    }
};