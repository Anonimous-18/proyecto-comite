"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "roles",
      [
        {
          id: 1,
          nombre: "Administrador",
          createdAt: new Date(),  // Establece createdAt con la fecha y hora actual
          updatedAt: new Date(), 
        },
        {
          id: 2,
          nombre: "Instructor",
          createdAt: new Date(),  // Establece createdAt con la fecha y hora actual
          updatedAt: new Date(), 
        },
        {
          id: 3,
          nombre: "Aprendiz",
          createdAt: new Date(),  // Establece createdAt con la fecha y hora actual
          updatedAt: new Date(), 
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
