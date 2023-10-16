'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'roles_permisos',
      [
        {
          id: 1,
          rol_id: 1,
          permisos_id: 2,
          createdAt: '2023-10-07 20:35:51',
          updatedAt: '2023-10-07 20:35:51',
        },
        {
          id: 2,
          rol_id: 1,
          permisos_id: 3,
          createdAt: '2023-10-07 20:35:51',
          updatedAt: '2023-10-07 20:35:51',
        },
        {
          id: 3,
          rol_id: 1,
          permisos_id: 1,
          createdAt: '0000-00-00 00:00:00',
          updatedAt: '0000-00-00 00:00:00',
        },
        {
          id: 4,
          rol_id: 1,
          permisos_id: 4,
          createdAt: '0000-00-00 00:00:00',
          updatedAt: '0000-00-00 00:00:00',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('roles_permisos', null, {});
     */
  }
};
