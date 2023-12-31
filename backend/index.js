const http = require("http");
const cors = require("cors");
const express = require("express");
const { Server: SocketServer } = require("socket.io");

const config = require("./config.js");

const adminRoutes = require("./routes/admin.routes.js");
const venomRoutes = require("./routes/venomBot.routes.js");
const envioRoutes = require("./routes/envio.routes.js");
const gestorRoutes = require("./routes/gestor.routes.js");
const fichasRoutes = require("./routes/fichas.routes.js");
const rolesPermisos = require("./routes/roles_permisos.routes.js");
const usuariosRoutes = require("./routes/usuario.routes.js");
const evidenciaRoutes = require("./routes/evidencia.routes.js");
const novedadesRoutes = require("./routes/novedades.routes.js");
const instructorRoutes = require("./routes/instructor.routes.js");
const reglamentoRoutes = require("./routes/reglamento.routes.js");
const notificacionRoutes = require("./routes/notificacion.routes.js");
const inicio_sesionRoutes = require("./routes/inicio_sesion.routes.js");

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: [config.ORIGEN, "http://localhost:5173"],
    credentials: true,
  },
});

app.use(
  cors({
    origin: [config.ORIGEN, "http://localhost:5173"],
  })
  // cors()
);

app.use(express.json());
app.use(express.static(`uploads`));
app.use(express.urlencoded({ extended: true }))

app.use(venomRoutes);
app.use(adminRoutes);
app.use(envioRoutes);
app.use(fichasRoutes);
app.use(gestorRoutes);
app.use(rolesPermisos);
app.use(usuariosRoutes);
app.use(evidenciaRoutes);
app.use(novedadesRoutes);
app.use(instructorRoutes);
app.use(reglamentoRoutes);
app.use(notificacionRoutes);
app.use(inicio_sesionRoutes);

io.on("connection", (socket) => {
  console.log(`Usuario conectado ${socket.id}`);

  /**----------------
   * Sala instructor
   * ----------------*/
  socket.on("instructorConectado", () => {
    console.log("Sala de Instructor Conectada");
    socket.join("instructor");
  });

  /**----------------
   * Sala gestor
   * ----------------*/
  socket.on("gestorConectado", () => {
    console.log("Sala de Gestor Conectada");
    socket.join("gestor");
  });

  /**----------------
   * Evento notificar
   * ----------------*/
  socket.on("notificar", () => {
    io.to("gestor").emit("nuevaNotificacion");
  });

});

server.listen(config.PORT, "0.0.0.0", () =>
  console.log(`Server on port ${config.PORT}`)
);
