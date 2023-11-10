const express = require("express");
const controllers = require("../controllers/evidencia.controller");

const router = express.Router();

router.get("/api/evidencia", controllers.getEvidencia);

module.exports = router;
