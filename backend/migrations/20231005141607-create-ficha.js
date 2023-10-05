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
      codigo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      inicioLectiva: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      finLectiva: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      inicioProductiva: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      finProductiva: {
        type: Sequelize.DATE,
        allowNull: false
      },
      modalidad: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      jornada: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      programa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      instructor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull: false,
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