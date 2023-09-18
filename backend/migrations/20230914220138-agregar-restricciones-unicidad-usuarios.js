'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('usuarios', {
      fields: ['email'],
      type: 'unique',
      name: 'usuarios_email_unique'
    });

    await queryInterface.addConstraint('usuarios', {
      fields: ['contrasenia'],
      type: 'unique',
      name: 'usuarios_contrasenia_unique'
    });

    await queryInterface.addConstraint('usuarios', {
      fields: ['documento'],
      type: 'unique',
      name: 'usuarios_documento_unique'
    });

    await queryInterface.addConstraint('usuarios', {
      fields: ['telefono'],
      type: 'unique',
      name: 'usuarios_telefono_unique'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('usuarios', 'usuarios_email_unique');
    await queryInterface.removeConstraint('usuarios', 'usuarios_contrasenia_unique');
    await queryInterface.removeConstraint('usuarios', 'usuarios_documento_unique');
    await queryInterface.removeConstraint('usuarios', 'usuarios_telefono_unique');
  }
};
