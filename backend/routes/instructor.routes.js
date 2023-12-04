const { Router } = require("express");
const controlComite = require("../controllers/comites.controller.js");
const controlDocx = require("../controllers/docx.controller.js");
const uploadMiddleware = require("../utils/handleStorage");

const router = Router();

router
  .post(
    "/api/comites",
    uploadMiddleware.single("evidencia"),
    controlComite.createComites,
    controlDocx.citacion
  )
  .post("/api/comites/aprendices", controlComite.getAprendicesImplicados)
  .get("/api/comites", controlComite.getComites)
  .get("/api/comites/:id", controlComite.comitebyId)
  .put("/api/comites/:id", controlComite.updateComite)
  .delete("/api/comites/:id", controlComite.deleteComite);

module.exports = router;
