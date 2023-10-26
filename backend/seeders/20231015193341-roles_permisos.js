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
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          rol_id: 1,
          permisos_id: 3,
          createdAt: new Date(),
          updatedAt:new Date(),
        },
        {
          id: 3,
          rol_id: 1,
          permisos_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          rol_id: 1,
          permisos_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles_permisos', null, {});
  }
};
