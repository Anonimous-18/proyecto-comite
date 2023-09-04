const cors = require("cors");
const express = require("express");

const { PORT } = require("./config.js");

// Rutas
const inicio_sesionRoutes = require("./routes/inicio_sesion.routes.js");
const reglamentoRoutes = require("./routes/reglamento.routes.js");

const app = express();

app.use(cors());

// Procesamientos:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(inicio_sesionRoutes);
app.use(reglamentoRoutes);

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
