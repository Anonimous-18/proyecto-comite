'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('comites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      instructor_fk: {
        type: Sequelize.INTEGER,
        allowNull: false, // Debe ser requerido
        references: {
          model: 'usuarios',
          key: 'id'
        },
        onUpdate: 'CASCADE', // Opciones de actualización en cascada
        onDelete: 'CASCADE' // Opciones de eliminación en cascada
      },
      tipo_falta: {
        type: Sequelize.ENUM('disciplinaria', 'academica'),
        allowNull: false // Debe ser requerido
      },
      descripcion_solicitud: {
        type: Sequelize.STRING,
        allowNull: false // Debe ser requerido
      },
      carpeta_anexos: {
        type: Sequelize.STRING,
        allowNull: false // Debe ser requerido
      },
      acta: {
        type: Sequelize.TEXT, // Puede ser nulo y es de tipo text
        allowNull: true
      },
      estado: {
        type: Sequelize.ENUM('espera', 'rechazado', 'aceptado', 'ejecucion'),
        defaultValue: 'espera' // Valor predeterminado 'espera'
      },
      recomendacion: {
        type: Sequelize.STRING,
        allowNull: true
      },
      evidencia: {
        type: Sequelize.STRING,
        allowNull: true
      },
      anexar_plan_mejoramiento: {
        type: Sequelize.STRING,
        allowNull: true
      },
      resultado_plan_mejoramiento: {
        type: Sequelize.ENUM('D', 'A'),
        allowNull: true
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('comites');
  }
};
