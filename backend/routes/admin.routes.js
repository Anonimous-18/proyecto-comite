const { createRol, getRol, updateRol, deleteRol } = require("../controllers/admin.controller.js");
const { Router } = require("express");

const router = Router();

router.post("/api/create-rol", createRol);
router.get("/api/get-rol", getRol);
router.put("/api/update-rol/:id", updateRol);
router.delete("/api/delete-rol/:id", deleteRol);

module.exports = router;