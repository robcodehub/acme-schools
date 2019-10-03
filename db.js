const pg = require('pg');

const Sequelize = require('sequelize');
const { UUID, UUIDV4, STRING } = Sequelize;

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
  imageURL: STRING
})

