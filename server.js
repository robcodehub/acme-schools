const express = require('express');
const app = express();
const db = require('./db');

const path = require('path');

const port = process.env.PORT || 3010;

//CHANGE TO db.syncAndSeed & .then
app.listen(port, ()=> console.log(`listening on port ${port}`));

//Home page
app.get('/', (req, req, next) => res.sendFile(path.join(__dirname, "index.html")));

// Route /api/students


// Route  /api/schools


