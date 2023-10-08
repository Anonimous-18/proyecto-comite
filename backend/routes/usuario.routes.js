const express = require("express");
const controller = require("../controllers/usuarios.controller");

const router = express.Router();

router.post("/api/usuarios", controller.getUserById)

module.exports = router;