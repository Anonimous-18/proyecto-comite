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
    const getType = async () => {
      const [result] = await pool.query(
        `SELECT * from roles WHERE id = ${decodedToken.user.rol_id}`
      );
      console.log(result[0]);
      if (result[0].nombre !== "Administrador") {
        console.log("Entro");
        return res
          .status(401)
          .json({ message: `Acceso solo para administradores.` });
      } else {
        next();
      }
    };
    getType();
  } catch (error) {
    return res.status(401).json({ message: "Token no válido" });
  }
};

module.exports = { verifyToken };
