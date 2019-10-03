const express = require('express');
const app = express();
const db = require('./db');
const { models } = require('./db');
const { Student, School } = models;

const path = require('path');

const port = process.env.PORT || 3010;

//CHANGE TO db.syncAndSeed & .then
app.listen(port, ()=> console.log(`listening on port ${port}`));

//Home page
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, "index.html")));

// Route /api/students
app.get('/api/students', (req, res, next) => {
  Student.findAll()
  .then(students => res.send(students))
  .catch(next)
});

// Route  /api/schools


