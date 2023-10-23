"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Novedad extends Model {
    static associate(models) {
      Novedad.belongsTo(models.usuarios, {
        as: "instructor",
        foreignKey: "instructor_fk",
      });
      Novedad.belongsTo(models.usuarios, {
        as: "aprendiz",
        foreignKey: "aprendiz_fk",
      });
    }
  }
  Novedad.init(
    {
      descripcion_novedad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombre_novedad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      instructor_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "id",
        },
      },
      aprendiz_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Novedad",
    }
  );
  return Novedad;
};
