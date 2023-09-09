const { Router } = require("express");
const { verifyToken, filtrarRol } = require("../middlewares/session.meddleware.js")
const { createRol, getRol, updateRol, deleteRol } = require("../controllers/admin.controller.js");

const router = Router();

router.post("/api/create-rol", verifyToken, createRol);
router.get("/api/get-rol", verifyToken, getRol);
router.put("/api/update-rol/:id", verifyToken, updateRol);
router.delete("/api/delete-rol/:id", verifyToken, deleteRol);

module.exports = router;