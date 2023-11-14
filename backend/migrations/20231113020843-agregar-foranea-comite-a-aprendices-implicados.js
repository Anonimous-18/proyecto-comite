'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'aprendices_implicados', // nombre de la tabla
      'comite_fk', // nombre de la clave foranea
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'comites', // nombre de la tabla de referencia
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'aprendices_implicados', // nombre de la tabla
      'comite_fk' // nombre de la clave foranea
    );
  }
};
