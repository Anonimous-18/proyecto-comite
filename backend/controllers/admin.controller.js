const express = require("express");
const router = express.Router();
const Roles = require("../models/paragrafos.js");

router.get("/listar", async (req, res) => {
  try {
    const roles = await Roles.findAll();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
