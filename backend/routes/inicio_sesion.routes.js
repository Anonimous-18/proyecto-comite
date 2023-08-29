const { Router } = require("express");
const { login } = require("../controllers/inicio_sesion.controller.js");

const router = Router();

router.post("/api/login", login);

module.exports = router;
