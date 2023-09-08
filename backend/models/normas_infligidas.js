const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('normas_infligidas', {
    nor_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    art_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'articulos',
        key: 'art_id'
      }
    }
  }, {
    sequelize,
    tableName: 'normas_infligidas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nor_id" },
        ]
      },
      {
        name: "art_id",
        using: "BTREE",
        fields: [
          { name: "art_id" },
        ]
      },
    ]
  });
};
