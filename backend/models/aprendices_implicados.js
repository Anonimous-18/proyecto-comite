const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aprendices_implicados', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    documento: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    comite_fk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comites',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'aprendices_implicados',
    timestamps: true,
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
        name: "usuario_id",
        using: "BTREE",
        fields: [
          { name: "usuario_id" },
        ]
      },
      {
        name: "comite_fk",
        using: "BTREE",
        fields: [
          { name: "comite_fk" },
        ]
      },
    ]
  });
};
