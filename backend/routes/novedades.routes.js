const express = require("express");
const controller = require("../controllers/novedades.controller.js");

const router = express.Router();

router
  .get("/api/novedades", controller.getNovedades)
  .get("/api/novedades/:id", controller.getNovedadById)
  .post("/api/novedades", controller.createNovedad)
  .put("/api/novedades/:id", controller.updateNovedad)
  .delete("/api/novedades/:id", controller.deleteNovedad);

module.exports = router;
