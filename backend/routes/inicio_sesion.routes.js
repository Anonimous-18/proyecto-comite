const { Router } = require("express");
const { verifyToken, filtrarRol } = require("../middlewares/session.meddleware.js");
const {
  login,
  recoveryEmail,
} = require("../controllers/inicio_sesion.controller.js");

const router = Router();

/**----------------------------------
 * |  Ruta de logueo
 ----------------------------------*/
router.post("/api/login", login);

/**----------------------------------
 * |  Ruta de logueo
 ----------------------------------*/
router.post("/api/reset-password", recoveryEmail);

/**---------------------------------------------
 * |  Ejemplo del uso del Middleware VerifyToken
 ---------------------------------------------*/
router.get("/api/test", verifyToken, (req, res) => {
  const { id, nombre, email, creado, rol_id } = req.userData.user;
  if (req.userData.user) {
    return res.status(200).json({ id, nombre, email, creado, rol_id });
  }
  return res.status(500).json(user);
});

router.post("/api/verificar-rol", filtrarRol);
/**
 * --------------------------------------------
 */

module.exports = router;
