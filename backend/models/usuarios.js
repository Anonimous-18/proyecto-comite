'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuarios.init({
    nombre_completo: DataTypes.STRING,
    email: DataTypes.STRING,
    contrasenia: DataTypes.STRING,
    creado: DataTypes.DATE,
    rol_id: DataTypes.INTEGER,
    tipo_documento: DataTypes.STRING,
    documento: DataTypes.STRING,
    cargo: DataTypes.STRING,
    telefono: DataTypes.STRING,
    dependencia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuarios',
  });


  // Definir la relación con Roles
  usuarios.belongsTo(sequelize.models.roles, { foreignKey: 'rol_id' });
  return usuarios;
};