'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('fichas', {
      fields: ['instructor_id'],
      type: 'foreign key',
      name: 'fichas_instructor_fk',
      references: {
        table: 'usuarios', // Reemplaza 'usuarios' con el nombre real de la tabla 'usuarios'
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('fichas', 'fichas_instructor_fk');
  }
};
