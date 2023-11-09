"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    static associate(models) {}
  }
  Roles.init(
    {
      nombre: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      creado: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "roles",
    }
  );
  return Roles;
};
