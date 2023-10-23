'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        nombre_completo: 'Santiago Gomez Noguera',
        email: 'begomez1054@gmail.com',
        contrasenia: '3',
        tipo_documento: 'TI',
        documento: '3',
        telefono: '3013816950',
        cargo: 'Aprendiz',
        dependencia: 'CAD',
        creado: new Date(),  
        rol_id: 3,
      },
      {
        nombre_completo: 'Brayan Gomez Noguera',
        email: 'begomez334@gmail.com',
        contrasenia: '1',
        tipo_documento: 'CC',
        documento: '1',
        telefono: '3206516254',
        cargo: 'Aprendiz',
        dependencia: 'CAD',
        creado: new Date(),  // Establece createdAt con la fecha y hora actual
        rol_id: 1,
      },
      {
        nombre_completo: 'Alejandro Toro',
        email: 'karlatrosillo@gmail.com',
        contrasenia: '2',
        tipo_documento: 'CC',
        documento: '2',
        telefono: '3106755050',
        cargo: 'Aprendiz',
        dependencia: 'CAD',
        creado: new Date(),  // Establece createdAt con la fecha y hora actual
        rol_id: 2,
      },
    ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
