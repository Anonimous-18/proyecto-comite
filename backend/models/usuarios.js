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
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    contrasenia: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tipo_documento: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    documento: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    creado: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    cargo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    dependencia: {
      type: DataTypes.STRING(200),
      allowNull: true
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
        name: "rol_id",
        using: "BTREE",
        fields: [
          { name: "rol_id" },
        ]
      },
    ]
  });
};
