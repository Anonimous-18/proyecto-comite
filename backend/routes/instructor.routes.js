const { Router } = require("express");
const controllers = require("../controllers/comites.controller.js");

const router = Router();

router
  .post("/api/comites", controllers.createComites)
  .post("/api/comites/aprendices", controllers.getAprendicesImplicados)
  .get("/api/comites", controllers.getComites)
  .get("/api/comites/:id", controllers.comitebyId)
  .put("/api/comites/:id", controllers.updateComite)
  .delete("/api/comites/:id", controllers.deleteComite);

module.exports = router;
