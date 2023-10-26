"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notificacion_Usuario extends Model {
    static associate(models) {
      Notificacion_Usuario.belongsTo(models.Notificacion, {
        as: "notificacion",
        foreignKey: "notificacion_id",
      });
      Notificacion_Usuario.belongsTo(models.usuarios, {
        as: "receptor",
        foreignKey: "receptor_id",
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
      receptor_id: {
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
