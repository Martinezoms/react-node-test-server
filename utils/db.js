const { Sequelize } = require('sequelize');

const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;
const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: `localhost`,
  dialect: `postgres`
});

module.exports = db;
