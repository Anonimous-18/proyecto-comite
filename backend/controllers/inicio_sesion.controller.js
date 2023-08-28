const pool = require("../database/db.js");

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

    req.session.user = result[0];
    res.json(req.session.user)
  } catch (error) {
    res.status(500).json({
      message: `Error al intentar logearse detalles: ${error.message}`,
    });
  }
};

module.exports = {
  login,
};
