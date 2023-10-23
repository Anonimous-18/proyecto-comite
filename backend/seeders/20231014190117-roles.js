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
          creado: new Date(), 
        },
        {
          id: 2,
          nombre: "Instructor",
          creado: new Date(),   
        },
        {
          id: 3,
          nombre: "Aprendiz",
          creado: new Date(), 
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
