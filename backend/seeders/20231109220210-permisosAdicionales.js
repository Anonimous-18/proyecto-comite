'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'permisos',
      [
        {
          id: 5,
          nombre: 'list-permisos',
          creado: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          nombre: 'permisos-rol',
          creado: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('permisos', null, {});
  }
};
