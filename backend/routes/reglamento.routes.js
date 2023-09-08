const { Router } = require("express");
const { getReglamento } = require("../controllers/reglamento.controller.js");
const { verifyToken } = require("../middlewares/session.meddleware.js");

const router = Router();

router.get("/api/reglamento", verifyToken, getReglamento);

module.exports = router;