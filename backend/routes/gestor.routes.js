const { Router } = require("express");
const controlDocx = require("../controllers/docx.controller.js");

const router = Router();

router
  .post("/api/casos", controlDocx.actaCasos)
  .post("/api/crear-acta", controlDocx.crearActa)

module.exports = router;
  