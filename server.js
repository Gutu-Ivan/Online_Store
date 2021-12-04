const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const db = require('./database/db');
const authRoutes = require('./routes/auth');

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use('/api/auth', authRoutes);
db();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port: ${port}`));