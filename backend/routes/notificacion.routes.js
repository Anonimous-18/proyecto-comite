const express = require("express");

const router = express.Router();
const notificacionController = require("../controllers/notificacion.controller.js");

router
  .get("/api/notificaciones/", notificacionController.getNotificaciones)
  .post("/api/notificaciones/", notificacionController.createNotificacion)
  .get("/api/notificaciones/:id", notificacionController.getNotificacionById)
  .delete("/api/notificaciones/:id", notificacionController.deleteNotificacion)
  .get(
    "/api/notificaciones-usuarios",
    notificacionController.getNotificacionesUsuarios
  )
  .get(
    "/api/notificaciones-usuarios/:id",
    notificacionController.getNotificacionUsuarioById
  )
  .delete(
    "/api/notificaciones-usuarios/:id",
    notificacionController.deleteNotificacionUsuario
  );

module.exports = router;
