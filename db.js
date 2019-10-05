const pg = require('pg');

const Sequelize = require('sequelize');
const { UUID, UUIDV4, STRING, TEXT, DECIMAL } = Sequelize;

//SQL DATABASE acme-schools
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme-schools');

const uuidStandard = {
  type: UUID,
  primaryKey: true,
  defaultValue: UUIDV4
};

const School = conn.define('school', {
  id: uuidStandard,
  name: STRING,
  imageURL: TEXT
});

const Student = conn.define('student', {
  id: uuidStandard,
  firstName: STRING,
  lastName: STRING,
  email: {
    type: STRING,
    unique: true,
    allowNull: false
  },
  GPA: DECIMAL
});

//STUDENT HAS SCHOOL ID - CONNECT STUDENT TO SCHOOL
//CONNECT SCHOOL TO STUDENT
Student.belongsTo(School);
School.hasMany(Student);

//SHOW MOST POPULAR SCHOOL - EITHER FRONT END FILTER OR SEQUELIZE CLASS METHOD ON SCHOOL
//SCHOOL.MOSTPOPULARSCHOOL = FUNCTION....


//SHOW HIGHEST GPA SCHOOL - EITHER FRONT END FILTER OR SEQUELIZE CLASS METHOD ON SCHOOL
//SCHOOL.HIGHESTGPA = FUNCTION....


const syncAndSeed = async() => {
  await conn.sync({force: true});

  //SEED DATA IN CORRECT ORDER

  const schools = [
    {name: "MIT", imageURL: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg"},
    {name: "Harvard", imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/500px-Harvard_shield_wreath.svg.png"},
    {name: "Cal Poly", imageURL: "https://universitymarketing.calpoly.edu/wp-content/uploads/2019/08/vertical_logo.png"},
    {name: "Melbourne Uni", imageURL: "https://brandhub.unimelb.edu.au/guidelines/logos/04_Logo_Vertical-Housed.jpg"},
    {name: "Monash Uni", imageURL: "https://digistorm-websites.s3-ap-southeast-2.amazonaws.com/cac-au-qld-27-website/content/Imported/Monash_Uni_Logo.jpg?mtime=20180928141803"}
  ];

  const [MIT, Havard, CalPoly, MelbUni, MonashUni] = await Promise.all(schools.map(school => School.create(school)));


  const Students = [
    {firstName: "Joe", lastName: "Average", email: "joe@average.com", GPA: 2.9},
    {firstName: "Moe", lastName: "Smith", email: "moe@smith.com", GPA: 3.2},
    {firstName: "Carlos", lastName: "Carlson", email: "carlos@carlson.com", GPA: 3.7},
    {firstName: "Anny", lastName: "Ace", email: "anny@ace.com", GPA: 3.9},
    {firstName: "Sally", lastName: "Smarts", email: "sally@smarts.com", GPA: 4.0}
  ];

  const [student1, student2, student3, student4, student5] = Students.map(student => Student.create(student));


}; //END SYNC AND SEED


module.exports = {
  syncAndSeed,
  models: {
    Student,
    School
  }
}
