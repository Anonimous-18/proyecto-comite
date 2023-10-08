const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comites_articulos', {
    com_art_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    comite_fk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comites',
        key: 'id'
      }
    },
    articulo_fk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'articulos',
        key: 'art_id'
      }
    }
  }, {
    sequelize,
    tableName: 'comites_articulos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "com_art_id" },
        ]
      },
      {
        name: "comite_fk",
        using: "BTREE",
        fields: [
          { name: "comite_fk" },
        ]
      },
      {
        name: "articulo_fk",
        using: "BTREE",
        fields: [
          { name: "articulo_fk" },
        ]
      },
    ]
  });
};
