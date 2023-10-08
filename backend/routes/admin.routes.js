const { Router } = require("express");
const { verifyToken } = require("../middlewares/session.meddleware.js")
const { createRol, getRol, updateRol, deleteRol, getRolbyId, createPermiso } = require("../controllers/admin.controller.js");
const permisosMiddleware = require("../middlewares/permisosUsuario.meddleware");

const router = Router();

router.post("/api/create-rol", verifyToken, permisosMiddleware.comprobarPermiso("create-roles"), createRol);
router.get("/api/get-rol", verifyToken,  permisosMiddleware.comprobarPermiso("list-roles"),getRol); 
router.get("/api/get-rol/:id", verifyToken, permisosMiddleware.comprobarPermiso("list-roles"), getRolbyId);//debe de salir un error 403 
router.put("/api/update-rol/:id", verifyToken, permisosMiddleware.comprobarPermiso("edit-roles"), updateRol);
router.delete("/api/delete-rol/:id", verifyToken,  permisosMiddleware.comprobarPermiso("delete-roles"), deleteRol);

router.post("/api/create-permiso",createPermiso);

module.exports = router;