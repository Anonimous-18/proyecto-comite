const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('articulos', {
    art_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    art_titulo: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    art_descripcion: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    cap_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'capitulos',
        key: 'cap_id'
      }
    }
  }, {
    sequelize,
    tableName: 'articulos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "art_id" },
        ]
      },
      {
        name: "cap_id",
        using: "BTREE",
        fields: [
          { name: "cap_id" },
        ]
      },
    ]
  });
};
