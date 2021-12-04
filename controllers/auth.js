const User = require('../models/User')
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
        newUser.password1 = password1

    } catch{
        console.log('signupController error: ', err)
    }
};