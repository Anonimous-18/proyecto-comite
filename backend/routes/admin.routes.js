const { Router } = require("express");
const { verifyToken } = require("../middlewares/session.meddleware.js")
const { createRol, getRol, updateRol, deleteRol, getRolbyId, createPermiso } = require("../controllers/admin.controller.js");
const { permisosUsuario } = require("../middlewares/permisosUsuario.meddleware.js");

const router = Router();

router.post("/api/create-rol", verifyToken, createRol);
router.get("/api/get-rol", verifyToken, getRol);
router.get("/api/get-rol/:id", verifyToken, getRolbyId);
router.put("/api/update-rol/:id", verifyToken, updateRol);
router.delete("/api/delete-rol/:id", verifyToken, deleteRol);

router.post("/api/create-permiso", createPermiso);

module.exports = router;