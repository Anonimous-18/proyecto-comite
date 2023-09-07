'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles_permisos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  roles_permisos.init({
    rol_id: DataTypes.INTEGER,
    permisos_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'roles_permisos',
  });
  return roles_permisos;
};