const cors = require("cors");
const express = require("express");

const { PORT } = require("./config.js");

// Rutas
const inicio_sesion = require("./routes/inicio_sesion.routes.js");

const app = express();

app.use(cors());

// Procesamientos:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(inicio_sesion);

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
