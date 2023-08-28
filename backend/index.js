const cors = require("cors");
const express = require("express");

const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

const { v4 } = require("uuid");

const pool = require("./database/db.js");
const { PORT } = require("./config.js");

// Generamos una clave secreta de sesión
const secretKey = v4();

// Rutas
const inicio_sesion = require("./routes/inicio_sesion.routes.js");

const app = express();

app.use(cors());
// Configuración de la base de datos para almacenar sesiones
const sessionStore = new MySQLStore(
  {
    expiration: 86400000, // Tiempo de expiración de las sesiones
    createDatabaseTable: true, // Crea automáticamente la tabla si no existe
  },
  pool
);
app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
  })
);

// Procesamientos:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(inicio_sesion);

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
