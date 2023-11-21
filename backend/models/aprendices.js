'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aprendices extends Model {
    static associate(models) {
      aprendices.belongsTo(models.ficha, {
        foreignKey: "ficha_fk",
      })
    }
  }
  aprendices.init({
    documento: DataTypes.STRING,
    contrato: {
      type: DataTypes.ENUM('si', 'no'),
      defaultValue: 'no'
    },
    historialAcademico: DataTypes.TEXT,
    ficha_fk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'id'
      }
    },

  }, {
    sequelize,
    modelName: 'aprendices',
  });
  return aprendices;
};