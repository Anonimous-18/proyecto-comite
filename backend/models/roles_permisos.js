"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Roles_Permisos extends Model {
    static associate(models) {
      Roles_Permisos.belongsTo(models.roles, {
        as: "rol",
        foreignKey: "rol_id",
      });
      Roles_Permisos.belongsTo(models.permisos, {
        as: "permisos",
        foreignKey: "permisos_id",
      });
    }
  }
  Roles_Permisos.init(
    {
      rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "roles",
          key: "id",
        },
      },
      permisos_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "permisos",
          key: "id",
        },
      },
    },
    {
     sequelize,
     modelName: "roles_permisos"
    }
  );

  return Roles_Permisos;
};
