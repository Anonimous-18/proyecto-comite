const Sequelize = require('sequelize');

const sequelize = new Sequelize('proyecto_comite', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
