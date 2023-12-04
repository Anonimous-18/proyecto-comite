const express = require("express");
// const middlewares = require("../middlewares/session.meddleware");
const controllerEnvio = require("../controllers/envio.controller");
const controllerVenom = require("../controllers/venomBot.controller");

const router = express.Router();

router.get("/api/envio/:rutOpcion/:idDesdeClie", controllerEnvio.envioDocumentos);
router.get("/api/envio-mensaje", controllerVenom.envioMensaje);

module.exports = router;