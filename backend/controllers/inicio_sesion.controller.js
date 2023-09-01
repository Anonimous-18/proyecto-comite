const jwt = require("jsonwebtoken");
const pool = require("../database/db.js");
const { v4 } = require("uuid");
const nodemailer = require("nodemailer");
const { EMAIL, EMAIL_PASSWORD } = require("../config.js");

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
    res.json({ token });
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
    user: `${EMAIL}`,
    pass: `${EMAIL_PASSWORD}`,
  },
});

/**----------------------------------
 * |  Controlador del envio del email
 ----------------------------------*/
const recoveryEmail = (req, res) => {
  const email = req.body.email;

  const mailOptions = {
    from: `${EMAIL}`,
    to: email,
    subject: "Recuperación de Contraseña",
    html: `<body
    style="
      background-color: rgb(255, 255, 255);
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    "
  >
    <article style="width: 80%; height: 100vh; border: 1px solid black">
      <header
        style="
          color: rgb(255, 255, 255);
          background-color: rgb(0, 119, 255);
          text-align: center;
          padding: 10px 0;
          height: 15%;
        "
      >
        <h1>JustiApp</h1>
      </header>
      <main
        style="
        width: 100%;
          background-color: rgb(255, 255, 255);
          border-color: black;
          border-width: 1px;
          height: 70%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        "
      >
      <br>
        <main style="width:70%;height: 100%;">
          <h3
            style="
              color: rgb(0, 0, 0);
              margin-left: 40px;
              margin: 10px 0;
              color: #000;
            "
          >
           <b> Recuperacion de Contraseña</b>
          </h3>
          <h3
            style="
              color: rgb(129, 127, 127);
              margin-left: 10px;
              margin-left: 10px;
            "
          >
            para recuperar tu contraseña debes ingresar tu ultima contraseña para hacegurarnos de que eres tu 
            <span style="color: blue; font-size: 20px">&#x2193;</span>
          </h3>

          <div>
            <br>
            <br>
            <h4>
              Contraseña :
              <br> <br> <br>
              <strong
                type="text"
                name="107Anonimous18"
                placeholder="107Anonimous18@"
                style="
                  padding: 10px;
                  border: 1px solid black;
                  border-radius: 5px;
                "
              >
                ${secretKey}</strong
              >
            </h4>
          </div>
          <h3 style="color: rgb(129, 127, 127); ">
            
            <br><br><br><br>  <br><br><br><br>
            ¿No as podido recuperar tu contrasena?
            <a href="">Usa Nuestra linea  3136349798  </a>
          </h3>
        </main>
      </main>
      <footer style="background-color: rgb(0, 119, 255); height: 15%">
        <h3
          style="
            color: rgb(129, 127, 127);
            color: aliceblue;
            text-align: center;
            padding: 40px;
          "
        >
          Copyright © 2023 JustiApp, SENA.
        </h3>
      </footer>
    </article>
  </body>`, // Genera una nueva contraseña
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
