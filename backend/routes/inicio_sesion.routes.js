const { Router } = require("express");
const { verifyToken, filtrarRol , validateRequestBody } = require("../middlewares/session.meddleware.js");
const {
  login,
  recoveryEmail,
  registerUser,
  registerUsers
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

/**----------------------------------
 * |  Ruta de registro
 ----------------------------------*/
router.post("/api/register", registerUser);
router.post("/api/register/users", validateRequestBody, registerUsers);

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

/**---------------------------------------------
 * |  Middleware para filtrarRol
---------------------------------------------*/
router.post("/api/verificar-rol", filtrarRol, (req, res) => {
  res.status(200).json({ rol: req.rol })
});

module.exports = router;
