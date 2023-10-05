'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Programa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Programa.init({
    pro_codigo: DataTypes.STRING,
    pro_nombre: DataTypes.STRING,
    pro_nivelFormacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Programa',
  });
  return Programa;
};