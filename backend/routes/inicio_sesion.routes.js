const { Router } = require("express");
const { login } = require("../controllers/inicio_sesion.controller.js");
const { verifyToken } = require("../middlewares/session.meddleware.js");

const router = Router();

router.post("/api/login", login);
router.get("/api/test", verifyToken, (req, res) => {
  const user = req.userData.user;
  if (user) {
    return res.status(200).json(user);
  }
  return res.status(500).json(user);
});

module.exports = router;
