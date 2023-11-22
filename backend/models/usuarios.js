'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    static associate(models) {
      usuarios.belongsTo(models.roles, {
        as: "rol",
        foreignKey: "rol_id",
      });
    }
  }
  usuarios.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_completo: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: "usuarios_email_unique"
    },
    contrasenia: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "usuarios_contrasenia_unique"
    },
    tipo_documento: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    documento: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: "usuarios_documento_unique"
    },
    telefono: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: "usuarios_telefono_unique"
    },
    cargo: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    dependencia: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    creado: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp')
    },
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'roles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'usuarios',
    modelName: 'usuarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "contrasenia",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contrasenia" },
        ]
      },
      {
        name: "documento",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "documento" },
        ]
      },
      {
        name: "telefono",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "telefono" },
        ]
      },
      {
        name: "usuarios_email_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "usuarios_contrasenia_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contrasenia" },
        ]
      },
      {
        name: "usuarios_documento_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "documento" },
        ]
      },
      {
        name: "usuarios_telefono_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "telefono" },
        ]
      },
      {
        name: "rol_id",
        using: "BTREE",
        fields: [
          { name: "rol_id" },
        ]
      },
    ]
  });
  return usuarios;
};