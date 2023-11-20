const express = require("express");
const middlewares = require("../middlewares/session.meddleware");
const controllers = require("../controllers/evidencia.controller");

const router = express.Router();

router.get("/api/evidencia/:name", middlewares.verifyToken, controllers.getEvidencia);

module.exports = router;