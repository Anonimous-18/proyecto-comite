const { Router } = require("express");
// const { verifyToken } = require("../middlewares/session.meddleware.js")
const fichaController = require("../controllers/fichas.controller");
const permisosMiddleware = require("../middlewares/permisosUsuario.meddleware");

const router = Router();

router
  .post("/api/ficha", fichaController.createFicha)
  .get("/api/ficha", fichaController.getFicha)
  .get("/api/ficha/:id", fichaController.fichabyId)
  .put("/api/ficha/:id", fichaController.updateFicha)
  .delete("/api/ficha/:id", fichaController.deleteFicha);

module.exports = router;