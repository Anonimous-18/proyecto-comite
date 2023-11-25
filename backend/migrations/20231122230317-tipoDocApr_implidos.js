'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'aprendices_implicados', 
      'tipo_documento',
      {
        type: Sequelize.ENUM('CC', 'TI'),
        allowNull: false, // o true, dependiendo de tus necesidades
      }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'aprendices_implicados',
      'tipo_documento' 
    );
  }
};
