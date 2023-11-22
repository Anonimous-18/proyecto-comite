'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ficha extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ficha.hasMany(models.aprendices,{ foreignKey: "ficha_fk" })
      // ficha.belongsTo(models.usuarios, { foreignKey: 'instructor_id' })
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
    instructor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ficha',
  });
  return ficha;
};