const jwt = require("jsonwebtoken");
const { secretKey } = require("../controllers/inicio_sesion.controller.js");

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
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token no válido" });
  }
};

module.exports = { verifyToken };
