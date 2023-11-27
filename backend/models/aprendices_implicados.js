'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aprendices_implicados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      aprendices_implicados.belongsTo(models.comites, {
        foreignKey: "comite_fk"
      });
    }
  }
  aprendices_implicados.init({
    
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
    tipo_documento: {
      type: DataTypes.ENUM('CC', 'TI'),
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
    modelName: 'aprendices_implicados',
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
  return aprendices_implicados;
};
