const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
    console.log('Signup controller')
});

module.exports = router;