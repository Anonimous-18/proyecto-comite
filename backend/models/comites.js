const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comites', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    instructor_fk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    tipo_falta: {
      type: DataTypes.ENUM('disciplinaria','academica'),
      allowNull: false
    },
    descripcion_solicitud: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    carpeta_anexos: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    acta: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    estado: {
      type: DataTypes.ENUM('espera','rechazado','aceptado','ejecucion'),
      allowNull: true,
      defaultValue: "espera"
    },
    recomendacion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    anexar_plan_mejoramiento: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    resultado_plan_mejoramiento: {
      type: DataTypes.ENUM('D','A'),
      allowNull: true
    },
    comites_articulos_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comites_articulos',
        key: 'com_art_id'
      }
    }
  }, {
    sequelize,
    tableName: 'comites',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "instructor_fk",
        using: "BTREE",
        fields: [
          { name: "instructor_fk" },
        ]
      },
      {
        name: "comites_articulos_id",
        using: "BTREE",
        fields: [
          { name: "comites_articulos_id" },
        ]
      },
    ]
  });
};
