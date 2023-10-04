const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paragrafos', {
    par_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    par_descripcion: {
      type: DataTypes.STRING(900),
      allowNull: false
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
    tableName: 'paragrafos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "par_id" },
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
