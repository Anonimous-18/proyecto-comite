const { DB_HOST,DB_PASSWORD,DB_USER,DB_DATABASE} = require('./config.js')

const Sequelize = require('sequelize');
const sequelize = new Sequelize(`${DB_DATABASE}`, `${DB_USER}`, `${DB_PASSWORD}`, {
  host: `${DB_HOST}`,
  dialect: 'mysql',
});

module.exports = sequelize;
