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
    unique: true,
    allowNull: false
  },
  GPA: DECIMAL
});

Student.belongsTo(School);
School.hasMany(Student);

