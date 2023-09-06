const sequelize = require('./sequelize-config'); // Importa tu archivo de configuración de Sequelize

// Función asincrónica para probar la conexión
async function testDatabaseConnection() {
  try {
    // Prueba la conexión a la base de datos
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');

    // Cierra la conexión
    await sequelize.close();
    console.log('Conexión cerrada.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

// Llama a la función para probar la conexión
testDatabaseConnection();
