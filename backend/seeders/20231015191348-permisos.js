'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'permisos',
      [
        {
          id: 1,
          nombre: 'list-roles',
          createdAt: '2023-08-28 15:58:35',
          updatedAt: '2023-08-28 15:58:35',
        },
        {
          id: 2,
          nombre: 'create-roles',
          createdAt: '2023-08-28 15:58:35',
          updatedAt: '2023-08-28 15:58:35',
        },
        {
          id: 3,
          nombre: 'edit-roles',
          createdAt: '2023-08-28 15:58:35',
          updatedAt: '2023-08-28 15:58:35',
        },
        {
          id: 4,
          nombre: 'delete-roles',
          createdAt: '2023-08-28 15:58:35',
          updatedAt: '2023-08-28 15:58:35',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
