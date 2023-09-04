const { Router } = require("express");
const { getReglamento } = require("../controllers/reglamento.controller.js");

const router = Router();

router.get("/api/reglamento", getReglamento);

module.exports = router;