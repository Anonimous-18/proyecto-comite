const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fichas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inicioLectiva: {
      type: DataTypes.DATE,
      allowNull: false
    },
    finLectiva: {
      type: DataTypes.DATE,
      allowNull: false
    },
    inicioProductiva: {
      type: DataTypes.DATE,
      allowNull: false
    },
    finProductiva: {
      type: DataTypes.DATE,
      allowNull: false
    },
    modalidad: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    jornada: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    programa: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    instructor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'fichas',
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
        name: "fichas_instructor_fk",
        using: "BTREE",
        fields: [
          { name: "instructor_id" },
        ]
      },
    ]
  });
};
