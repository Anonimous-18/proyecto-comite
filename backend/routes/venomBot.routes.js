const express = require("express");
const uploadMiddleware = require("../utils/handleStorage");
const controller = require("../controllers/venomBot.controller");

const router = express.Router();

router
  .get("/api/bot", controller.envioMensaje)
  .post(
    "/api/bot",
    uploadMiddleware.single("archivo"),
    controller.envioMensaje
  );

module.exports = router;
