const express = require('express');
const app = express();
const db = require('./database/db');

db();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port: ${port}`));