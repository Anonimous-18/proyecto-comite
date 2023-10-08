const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_completo: {
      type: DataTypes.STRING(200),
      allowNull: true
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
    creado: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'roles',
        key: 'id'
      }
    },
    tipo_documento: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    documento: {
      type: DataTypes.STRING(200),
      allowNull: true,
      unique: "usuarios_documento_unique"
    },
    cargo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(15),
      allowNull: true,
      unique: "usuarios_telefono_unique"
    },
    dependencia: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuarios',
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
};
