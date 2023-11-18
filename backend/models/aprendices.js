'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aprendices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  aprendices.init({
    documento: DataTypes.STRING,
    contrato: {
      type: DataTypes.ENUM('si', 'no'),
      defaultValue: 'no'
    },
    historialAcademico: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'aprendices',
  });
  return aprendices;
};