"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notificacion_Usuario extends Model {
    static associate(models) {
      Novedad.belongsTo(models.notificacions, {
        as: "notificacion",
        foreignKey: "notificacion_id",
      });
      Novedad.belongsTo(models.usuarios, {
        as: "remisor",
        foreignKey: "remisor_id",
      });
    }
  }
  Notificacion_Usuario.init(
    {
      notificacion_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "notificacions",
          key: "id",
        },
      },
      remisor_id: {
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
      modelName: "Notificacion_Usuario",
    }
  );
  return Notificacion_Usuario;
};
