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
// Regla personalizada para verificar si un objeto tiene las propiedades requeridas
const hasRequiredProperties = (value) => {
  if (!Array.isArray(value)) {
    throw new Error('El campo debe ser un arreglo de objetos.');
  }

  const requiredProperties = ['Nombre Completo', 'Documento', 'Email', 'Telefono'];

  for (const obj of value) {
    for (const prop of requiredProperties) {
      if (!obj.hasOwnProperty(prop)) {
        throw new Error(`El objeto debe tener la propiedad "${prop}".`);
      }
    }
  }
  return true;
};
// Middleware para validar la estructura del cuerpo de la solicitud
const validateRequestBody = [
  // Verifica si 'data' está presente y es un arreglo de objetos con propiedades requeridas
  body('data').custom(hasRequiredProperties).withMessage('El campo "data" debe ser un arreglo de objetos con propiedades requeridas.'),

  // Verifica si 'cargo' está presente y es una cadena de texto
  body('cargo').isString().withMessage('El campo "cargo" debe ser una cadena de texto.'),

  // Maneja errores de validación
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // Si hay errores de validación, devuelve una respuesta de error
      return res.status(400).json({ errors: errors.array() });
    }

    // Si no hay errores, continúa con la siguiente función de middleware
    next();
  },
];

module.exports = { verifyToken, filtrarRol, validateRequestBody };
