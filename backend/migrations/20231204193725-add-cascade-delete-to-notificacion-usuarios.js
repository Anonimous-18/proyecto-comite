'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addConstraint('notificacion_usuarios', {
      fields: ['notificacion_id'],
      type: 'foreign key',
      name: 'fk_notificacion_usuarios_notificacion_id',
      references: {
        table: 'notificacions',
        field: 'id',
      },
      onDelete: 'CASCADE',
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('notificacion_usuarios', 'fk_notificacion_usuarios_notificacion_id');
  }
};
