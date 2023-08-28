const { Router } = require("express");
const { login } = require("../controllers/inicio_sesion.controller.js");
const { checkAdmin } = require("../middlewares/session.meddleware.js")

const router = Router();

router.post("/api/login", login);

// EJEMPLO DEL MIDDLEWARE ADMIN
router.get("/admin", checkAdmin, (req, res) => {
    res.send("<h1>Hola ADMIN</h1>")
});

module.exports = router;
