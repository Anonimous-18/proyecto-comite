const express = require("express");
// const middlewares = require("../middlewares/session.meddleware");
const controllers = require("../controllers/envio.controller");

const router = express.Router();

router.get("/api/envio/:rutOpcion/:idDesdeClie", controllers.envioDocumentos);

module.exports = router;