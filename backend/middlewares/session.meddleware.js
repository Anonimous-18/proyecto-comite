/**-------------------------------------------------------------------
 * |  jwt es el encargado de encriptar los datos de un inicio de sesión
 -------------------------------------------------------------------*/
const jwt = require("jsonwebtoken");
const pool = require("../database/db.js");
const { secretKey } = require("../controllers/inicio_sesion.controller.js");
const { body, validationResult } = require('express-validator');

/**------------------------------------------------------------
 * |  Middleware para verificar el rol del usuario autenticado
 ------------------------------------------------------------*/
const verifyToken = (req, res, next) => {
  const key = secretKey;

  /**-----------------------------------
   * |  Obtiene el token del encabezado
   -----------------------------------*/
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  try {
    /**-------------------------------------------------------
     * |  Verificar el token y obtener los datos decodificados
     -------------------------------------------------------*/
    let decodedToken = jwt.verify(token, key);

    /**---------------------------------------------
     * |  Guardamos los datos del usuario logueado
     ---------------------------------------------*/
    req.userData = decodedToken;
    if (decodedToken) {
      next();
    }
  } catch (error) {
    return res.status(401).json({ message: "Token no válido" });
  }
};

/**---------------------------------------------------------------
 * |  Middleware para dejarlo seguir si tiene un rol en especifico
 ---------------------------------------------------------------*/
const filtrarRol = (req, res, next) => {
  const key = secretKey;
  const token = req.headers.authorization?.split(" ")[1];
  const { rol } = req.body;

  console.log("BACKEND TOKEN: ", token);
  console.log("ROL : ", rol);

  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  try {
    const decodedToken = jwt.verify(token, key);
    req.userData = decodedToken;

    const getRol = async () => {
      const [result] = await pool.query(
        "SELECT * FROM roles WHERE roles.id = ?",
        [decodedToken.user.rol_id]
      );
      if (result.length === 0 && rol === "Invitado") {
        req.rol = "Invitado";
        next();
      } else if (result.length === 0) {
        return res.status(403).json({ message: "Usuario no autorizado" });
      } else if (result[0].nombre === rol) {
        req.rol = result[0].nombre;
        next();
      } else {
        return res.status(403).json({ message: "Usuario no autorizado" });
      }
    };
    getRol();
  } catch (error) {
    return res.status(401).json({ message: "Token no válido" });
  }
};





module.exports = { verifyToken, filtrarRol };
