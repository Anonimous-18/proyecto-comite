const express = require("express");
const controller = require("../controllers/usuarios.controller");

const router = express.Router();

router
  .post("/api/usuarios", controller.getUserById)
  .post("/api/aprendiz", controller.getAntecedenteForAprendiz)
  .get("/api/aprendices", controller.getAprendices);

module.exports = router;
