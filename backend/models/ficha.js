'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ficha extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ficha.init({
    fic_codigo: DataTypes.STRING,
    fic_inicioLectiva: DataTypes.DATE,
    fic_finLectiva: DataTypes.DATE,
    fic_inicioProductiva: DataTypes.DATE,
    fic_finProductiva: DataTypes.DATE,
    fic_modalidad: DataTypes.STRING,
    fic_jornada: DataTypes.STRING,
    programa: DataTypes.STRING,
    instructor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ficha',
  });
  return ficha;
};