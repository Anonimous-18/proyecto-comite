const { Router } = require("express");
const { verifyToken, filtrarRol } = require("../middlewares/session.meddleware.js")
const { createRol, getRol, updateRol, deleteRol } = require("../controllers/admin.controller.js");

const router = Router();

router.post("/api/create-rol", verifyToken, filtrarRol, createRol);
router.get("/api/get-rol", verifyToken, getRol);
router.put("/api/update-rol/:id", updateRol);
router.delete("/api/delete-rol/:id", deleteRol);

module.exports = router;