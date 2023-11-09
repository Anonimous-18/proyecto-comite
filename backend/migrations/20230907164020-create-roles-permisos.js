"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("roles_permisos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      rol_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "roles",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      permisos_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "permisos",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    await queryInterface.addIndex("roles_permisos", ["rol_id"]);
    await queryInterface.addIndex("roles_permisos", ["permisos_id"]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("roles_permisos");
  },
};
