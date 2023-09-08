const express = require("express");
const router = express.Router();
const Roles = require("../models/roles.js");

// ESTO ES PARA BORRAR:
router.get("/listar", async (req, res) => {
  try {
    const roles = await Roles.create({ nombre: "Test" });
    res.json({message: "entro"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
