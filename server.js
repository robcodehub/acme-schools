const express = require('express');
const app = express();
const db = require('./db');

const port = process.env.PORT || 3010;

//CHANGE TO db.syncAndSeed & .then
app.listen(port, ()=> console.log(`listening on port ${port}`));

// Route /api/students


// Route  /api/schools


