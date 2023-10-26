const express = require("express");

const router = express.Router();
const notificacionController = require("../controllers/notificacion.controller.js");

router
  .get("/", notificacionController.getNotificaciones)
  .post("/", notificacionController.createNotificacion)
  .get("/:id", notificacionController.getNotificacionById)
  .delete("/:id", notificacionController.deleteNotificacion);

module.exports = router;
