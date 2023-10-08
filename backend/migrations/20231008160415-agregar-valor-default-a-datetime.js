"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.changeColumn("comites", "createdAt", {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      }),
      queryInterface.changeColumn("comites", "updatedAt", {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.changeColumn("comites", "createdAt", {
        type: Sequelize.DATE,
        defaultValue: null,
      }),
      queryInterface.changeColumn("comites", "updatedAt", {
        type: Sequelize.DATE,
        defaultValue: null,
      }),
    ]);
  },
};
