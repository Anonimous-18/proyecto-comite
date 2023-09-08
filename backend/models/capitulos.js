const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('capitulos', {
    cap_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cap_titulo: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'capitulos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cap_id" },
        ]
      },
    ]
  });
};
