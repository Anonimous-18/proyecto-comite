"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Permisos extends Model {
    static associate(models) {}
  }
  Permisos.init(
    {
      nombre: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      creado: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.fn("current_timestamp"),
      },
    },
    {
      sequelize,
      modelName: "permisos",
    }
  );
  return Permisos;
};
