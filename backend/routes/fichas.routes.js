const { Router } = require("express");
// const { verifyToken } = require("../middlewares/session.meddleware.js")
const fichaController = require("../controllers/fichas.controller");

const router = Router();

router
  .post("/api/create-ficha", fichaController.createFicha)
  .get("/api/get-ficha", fichaController.getFicha)
  .get("/api/get-ficha/:id", fichaController.fichabyId)
  .put("/api/update-ficha/:id", fichaController.updateFicha)
  .delete("/api/delete-ficha/:id", fichaController.deleteFicha);

module.exports = router;
