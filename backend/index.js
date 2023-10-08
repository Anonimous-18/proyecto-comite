const cors = require("cors");
const express = require("express");

const { PORT } = require("./config.js");

// Rutas
const adminRoutes = require("./routes/admin.routes.js");
const fichasRoutes = require("./routes/fichas.routes.js");
const usuariosRoutes = require("./routes/usuario.routes.js");
const instructorRoutes = require("./routes/instructor.routes.js");
const reglamentoRoutes = require("./routes/reglamento.routes.js");
const inicio_sesionRoutes = require("./routes/inicio_sesion.routes.js");

const app = express();

app.use(cors());

// Procesamientos:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use(fichasRoutes);
app.use(usuariosRoutes);
app.use(instructorRoutes);
app.use(reglamentoRoutes);
app.use(inicio_sesionRoutes);

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
