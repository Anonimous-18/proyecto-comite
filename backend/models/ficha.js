'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ficha extends Model {
    static associate(models) {
      ficha.hasMany(models.aprendices,{ foreignKey: "ficha_fk" })
      ficha.belongsTo(models.usuarios, { foreignKey: 'instructor_id' })
    }
  }
  ficha.init({
    codigo: DataTypes.STRING,
    inicioLectiva: DataTypes.DATE,
    finLectiva: DataTypes.DATE,
    inicioProductiva: DataTypes.DATE,
    finProductiva: DataTypes.DATE,
    modalidad: DataTypes.STRING,
    jornada: DataTypes.STRING,
    programa: DataTypes.STRING,
    instructor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'ficha',
  });
  return ficha;
};