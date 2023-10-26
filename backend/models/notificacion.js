"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notificacion extends Model {
    static associate(models) {
      Novedad.belongsTo(models.usuarios, {
        as: "remitente",
        foreignKey: "remitente_fk",
      });
    }
  }
  Notificacion.init(
    {
      titulo: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      remitente_fk: {
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
      modelName: "Notificacion",
    }
  );
  return Notificacion;
};
