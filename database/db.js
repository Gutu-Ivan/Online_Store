const mongoose = require('mongoose');
const db =async() => {
    try{
        await mongoose.connect(
            'mongodb+srv://store_user:pass12345@online-store.ouvnt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log('Database connection successful')
    } catch (err) {
        console.log(err)
    }
}

module.exports = db;