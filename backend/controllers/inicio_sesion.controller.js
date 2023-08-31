const jwt = require("jsonwebtoken");
const pool = require("../database/db.js");
const { v4 } = require("uuid");
const nodemailer = require("nodemailer");

const secretKey = v4();

/**------------------------------
 * |  Controlador del logueo
 ------------------------------*/
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
      expiresIn: "1h",
    });

    /**-----------------------------------------------------
     * |  El token esta codificado
     -----------------------------------------------------*/
    res.json({ user, token });
  } catch (error) {
    res.status(500).json({
      message: `Error al intentar logearse detalles: ${error.message}`,
    });
  }
};

/**--------------------------------
 * |  Remitente del email
 --------------------------------*/
const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "richardospina18@gmail.com",
    pass: "bklzkodrqernvxae",
  },
});

/**----------------------------------
 * |  Controlador del envio del email
 ----------------------------------*/
const recoveryEmail = (req, res) => {
  const email = req.body.email;

  const mailOptions = {
    from: "98c0ccbf2a2e00",
    to: email,
    subject: "Recuperación de Contraseña",
    html: `<h1 style="color: red;">Recuperacion de Contrase</h1>
    <strong>${secretKey}</strong>`, // Genera una nueva contraseña
  };

  transport.sendMail(mailOptions, (error) => {
    if (error) {
      res
        .status(500)
        .send(`Error al enviar el correo de recuperación a ${email}.`);
    } else {
      res.status(200).send("Correo de recuperación enviado.");
    }
  });
};

module.exports = {
  login,
  recoveryEmail,
  secretKey,
};
