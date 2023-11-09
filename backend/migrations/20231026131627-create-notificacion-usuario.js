"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Notificacion_Usuarios", {
      notificacion_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Notificacions",
          key: "id",
        },
      },
      receptor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios",
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

    await queryInterface.addIndex("Notificacion_Usuarios", ["notificacion_id"]);
    await queryInterface.addIndex("Notificacion_Usuarios", ["receptor_id"]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Notificacion_Usuarios");
  },
};
