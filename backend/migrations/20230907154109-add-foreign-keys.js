'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('usuarios', {
      fields: ['rol_id'],
      type: 'foreign key',
      name: 'usuarios_rol_id_fk',
      references: {
        table: 'roles',
        field: 'id',
      },
      onDelete: 'no action', // Opcional: Define la acción en cascada si se borra un rol
      onUpdate: 'cascade', // Opcional: Define la acción en cascada si se actualiza un rol
    });
  },

  async down (queryInterface, Sequelize) {
    // Eliminar la llave foránea en caso de reversión
    await queryInterface.removeConstraint('usuarios', 'usuarios_rol_id_fk');
  }
};
