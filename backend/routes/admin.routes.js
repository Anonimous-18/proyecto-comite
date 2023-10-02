const { Router } = require("express");
const { verifyToken } = require("../middlewares/session.meddleware.js")
const { createRol, getRol, updateRol, deleteRol, getRolbyId } = require("../controllers/admin.controller.js");

const router = Router();

router.post("/api/create-rol", verifyToken, createRol);
router.get("/api/get-rol", verifyToken, getRol);
router.get("/api/get-rol/:id", verifyToken, getRolbyId);
router.put("/api/update-rol/:id", verifyToken, updateRol);
router.delete("/api/delete-rol/:id", verifyToken, deleteRol);

module.exports = router;