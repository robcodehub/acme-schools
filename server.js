const express = require('express');
const app = express();
const db = require('./db');
const { models } = require('./db');
const { Student, School } = models;

const path = require('path');

const port = process.env.PORT || 3010;


//Home page
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, "index.html")));

// Route /api/students
app.get('/api/students', (req, res, next) => {
  Student.findAll()
  .then(students => res.send(students))
  .catch(next)
});

// Route  /api/schools
app.get('/api/schools', (req, res, next) => {
  School.findAll()
  .then(schools => res.send(schools))
  .catch(next)
});


//STEP 1 - FINISH ROUTES

//CREATE A STUDENT ROUTE - POST ROUTE
//RETURN CREATED STUDENT WITH REDUX
//SEND INFO BACK TO FRONT END TO UPDATE STATE
/*
app.post('/api/students', (req, res, next) => {
  Student.create(req.body)
  .then(newStudent => res.status(201).send(newStudent))
  .catch(next)
});
*/
//DELETE A STUDENT - DELETE ROUTE
//DELETED STUDENT NOT RETURNED
//CHECK IF SUCCESSFUL OR NOT AND THEN DELETE STUDENT ON FRONT END
/*
app.delete('/api/students/:id', (req, res, next) => {
  Student.findByPk(req.params.id)
  .then(currentStudent => currentStudent.destroy())
  .then(() => res.sendStatus(204))
  .catch(next)
});
*/

//UPDATE A STUDENT - PUT ROUTE OR PATCH ROUTE
//PATCH ROUTE FOR A SPECIFIC FIELD - UPDATE SCHOOL FOR STUDENT


//REMOVE STUDENT FROM SCHOOL - PUT ROUTE OR PATCH ROUTE
//PATCH ROUTE FOR A SPECIFIC FIELD - UPDATE SCHOOL FOR STUDENT


db.syncAndSeed()
.then(() => {
app.listen(port, ()=> console.log(`listening on port ${port}`))
});
