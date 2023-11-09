const { Router } = require("express");
// const { verifyToken } = require("../middlewares/session.meddleware.js")
const rolesPermisos = require("../controllers/roles_permisos.controller");
const permisosMiddleware = require("../middlewares/permisosUsuario.meddleware");
const sessionMiddlewares = require("../middlewares/session.meddleware.js");

const router = Router();

router
  .get("/api/get-permisosRol/:id",sessionMiddlewares.verifyToken, permisosMiddleware.comprobarPermiso('permisos-rol'), rolesPermisos.getPermisosRol)
  // .get("/api/get-prueba/:id", rolesPermisos.getPermisosRol)
  // .post("/api/create-ficha", permisosMiddleware.comprobarPermiso("create-fichas"), rolesPermisos.createFicha)
  // .get("/api/get-ficha", rolesPermisos.getFicha)
  // .put("/api/update-ficha/:id", rolesPermisos.updateFicha)
  // .delete("/api/delete-ficha/:id", rolesPermisos.deleteFicha);

module.exports = router;