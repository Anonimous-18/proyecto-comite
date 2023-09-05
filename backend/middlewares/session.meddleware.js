/**-------------------------------------------------------------------
 * |  jwt es el encargado de encriptar los datos de un inicio de sesión
 -------------------------------------------------------------------*/
const pool = require("../database/db.js");
const jwt = require("jsonwebtoken");
const { secretKey } = require("../controllers/inicio_sesion.controller.js");

/**---------------------------------------------
 * |  Middleware para verificar el rol del
 * |  usuario autenticado
 ---------------------------------------------*/
const verifyToken = (req, res, next) => {
  const key = secretKey;
  // Obtener el token del encabezado
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  try {
    // Verificar el token y obtener los datos decodificados
    const decodedToken = jwt.verify(token, key);
    req.userData = decodedToken; // Guardar los datos del usuario en el objeto de solicitud
    if (decodedToken) {
      next();
    }
  } catch (error) {
    return res.status(401).json({ message: "Token no válido" });
  }
};

const filtrarRol = (req, res, next) => {
  const key = secretKey;
  const token = req.headers.authorization?.split(" ")[1];
  const { rol } = req.body;

  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  try {
    // Verificar el token y obtener los datos decodificados
    const decodedToken = jwt.verify(token, key);
    req.userData = decodedToken;

    const getRol = async () => {
      const [result] = await pool.query(
        "SELECT * FROM roles WHERE roles.id = ?",
        [decodedToken.user.rol_id]
      );
      if (result[0].nombre === rol) {
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
