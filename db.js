const pg = require('pg');

const Sequelize = require('sequelize');
const { UUID, UUIDV4, STRING } = Sequelize;

//SQL DATABASE acme-schools
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme-schools');




