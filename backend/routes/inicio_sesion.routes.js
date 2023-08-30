const { Router } = require("express");
const { login } = require("../controllers/inicio_sesion.controller.js");
const { verifyToken } = require("../middlewares/session.meddleware.js");

const router = Router();

router.post("/api/login", login);

/**----------------------------------
 * |  Uso del Middleware VerifyToken
 ----------------------------------*/
router.get("/api/test", verifyToken, (req, res) => {
  const { id, nombre, email, creado, rol_id } = req.userData.user;
  if (req.userData.user) {
    return res.status(200).json({ id, nombre, email, creado, rol_id });
  }
  return res.status(500).json(user);
});

module.exports = router;
