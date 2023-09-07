'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class permisos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  permisos.init({
    nombre: DataTypes.STRING,
    creado: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'permisos',
  });
  return permisos;
};