const express = require("express");
const controller = require("../controllers/usuarios.controller");

const router = express.Router();

router
  .post("/api/usuarios", controller.getUserById)
  .get("/api/aprendices", controller.getAprendices);

module.exports = router;
