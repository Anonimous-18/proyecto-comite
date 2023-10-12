const { Router } = require("express");
const { verifyToken } = require("../middlewares/session.meddleware.js");
const adminController = require("../controllers/admin.controller.js");
const permisosMiddleware = require("../middlewares/permisosUsuario.meddleware");

const router = Router();

router
  .post(
    "/api/create-rol",
    verifyToken,
    permisosMiddleware.comprobarPermiso("create-roles"),
    adminController.createRol
  )
  .get(
    "/api/get-rol",
    verifyToken,
    permisosMiddleware.comprobarPermiso("list-roles"),
    adminController.getRol
  )
  .get(
    "/api/get-rol/:id",
    verifyToken,
    permisosMiddleware.comprobarPermiso("list-roles"),
    adminController.getRolbyId
  ) //debe de salir un error 403
  .put(
    "/api/update-rol/:id",
    verifyToken,
    permisosMiddleware.comprobarPermiso("edit-roles"),
    adminController.updateRol
  )
  .delete(
    "/api/delete-rol/:id",
    verifyToken,
    permisosMiddleware.comprobarPermiso("delete-roles"),
    adminController.deleteRol
  )


  .post("/api/create-permiso", adminController.createPermiso)
  .get("/api/get-permisos", adminController.getPermisos)
  .get("/api/get-permiso/:id", adminController.getPermisobyId)
  .put("/api/update-permiso/:id", adminController.updatePermiso)
  .delete("/api/delete-permiso/:id", adminController.deletePermiso)

  .post("/api/create-rol-permiso",verifyToken, adminController.asignarPermiso)

module.exports = router;
