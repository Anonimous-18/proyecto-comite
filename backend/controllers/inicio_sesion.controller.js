const pool = require("../database/db.js");
const { v4 } = require("uuid");
const jwt = require("jsonwebtoken");

const secretKey = v4();

const login = async (req, res) => {
  try {
    const { email, contrasenia } = req.body;

    const [result] = await pool.query(
      "SELECT * FROM usuarios WHERE email = ? AND contrasenia = ?",
      [email, contrasenia]
    );

    if (result.length === 0)
      return res
        .status(404)
        .json({ message: `No se encontro al usuario con esos datos` });

    const user = result[0];

    /**-----------------------------------------------------
     * |  Creamos el Token de sesión con el tiempo de expiración
     * |  y mandamos el usuario logueado.
     -----------------------------------------------------*/
    const token = jwt.sign({ user }, secretKey, {
      expiresIn: "1h"
    });

    /**-----------------------------------------------------
     * |  El token esta codificado
     -----------------------------------------------------*/
    res.json({ token });
  } catch (error) {
    res.status(500).json({
      message: `Error al intentar logearse detalles: ${error.message}`,
    });
  }
};

module.exports = {
  login,
  secretKey,
};
