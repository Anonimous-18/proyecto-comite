"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Novedads", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      descripcion_novedad: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nombre_novedad: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      instructor_fk: {
        // Nueva columna para la clave foránea instructor_fk
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios", // Nombre de la tabla referenciada
          key: "id",
        },
      },
      aprendiz_fk: {
        // Nueva columna para la clave foránea aprendiz_fk
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios", // Nombre de la tabla referenciada
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
    // Asegúrate de agregar índices para las claves foráneas
    await queryInterface.addIndex("Novedads", ["instructor_fk"]);
    await queryInterface.addIndex("Novedads", ["aprendiz_fk"]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Novedads");
  },
};
