const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpire } = require('../config/keys');

exports.signupController = async (req, res) => {
    const { username, email, password1 } = req.body;
    try {
        const user = await User.findOne({ "email": email });
        if (user) {
            return res.status(400)
                .json({
                    "errorMessage": 'This email already exists',
                });
        }
        const newUser = new User();
        newUser.username = username;
        newUser.email = email;

        const salt = await bcrypt.genSalt(10);
        newUser.password1 = await bcrypt.hash(password1, salt);

        await newUser.save();
        res.json({
            successMessage: 'Registration success'
        });

    }
    catch (err) {
        console.log('signupController error: ', err)
        res.status(500)
            .json({
                errorMessage: 'Server error',
            });
    }
};

exports.signinController = async (req, res) => {
    const { email, password1 } = req.body
    console.log('Signin controller')
    try {
        const user = await User.findOne({ "email": email });
        if (!user) {
            return res.status(400)
                .json({
                    errorMessage: 'Invalid credentials',
                })
        }
        const isMatch = await bcrypt.compare(password1, user.password1);
        if (!isMatch) {
            return res.status(400)
                .json({
                    errorMessage: 'Invalid credentials',
                })
        }

        const payload = {
            user: {
                _id: user._id,
            },
        };
        jwt.sign(payload, jwtSecret, { expiresIn: jwtExpire }, (err, token) => {
            if (err) {
                console.log('jwt error', err)
            }
            const { _id, username, role } = user;
            res.json({
                token,
                user: { _id, username, email, role}
            });
        });
    }
    catch (err) {
        console.log('signinController error', err)
        res.status(500)
            .json({
                errorMessage: 'Server error',
            });
    }
};