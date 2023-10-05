'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fichas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fic_codigo: {
        type: Sequelize.STRING
      },
      fic_inicioLectiva: {
        type: Sequelize.DATE
      },
      fic_finLectiva: {
        type: Sequelize.DATE
      },
      fic_inicioProductiva: {
        type: Sequelize.DATE
      },
      fic_finProductiva: {
        type: Sequelize.DATE
      },
      fic_modalidad: {
        type: Sequelize.STRING
      },
      fic_jornada: {
        type: Sequelize.STRING
      },
      programa: {
        type: Sequelize.STRING
      },
      instructor_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('fichas');
  }
};