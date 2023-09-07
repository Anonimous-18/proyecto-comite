'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  roles.init({
    nombre: DataTypes.STRING,
    creado: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'roles',
  });
  // Definir la relación inversa con Usuarios
  roles.hasMany(sequelize.models.usuarios, { foreignKey: 'rol_id' });
  return roles;
};