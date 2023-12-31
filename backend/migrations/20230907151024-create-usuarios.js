'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_completo: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      contrasenia: {
        type: Sequelize.STRING
      },
      rol_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "roles", // Nombre de la tabla referenciada
          key: "id",
        },
      },
      tipo_documento: {
        type: Sequelize.STRING
      },
      documento: {
        type: Sequelize.STRING
      },
      cargo: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      dependencia: {
        type: Sequelize.STRING
      },
      creado: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
    });

    await queryInterface.addIndex("roles", ["rol_id"]);

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};