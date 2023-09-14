const jwt = require("jsonwebtoken");
const pool = require("../database/db.js");
const { v4 } = require("uuid");
const nodemailer = require("nodemailer");
const { EMAIL, EMAIL_PASSWORD } = require("../config.js");
const sequelize = require('../sequelize-config.js')
const {usuarios} = require('../models')


const secretKey = v4();

/**------------------------------
 * |  Controlador del logueo
 ------------------------------*/
const login = async (req, res) => {
  try {
    const { documento, contrasenia } = req.body;

    const [result] = await pool.query(
      "SELECT * FROM usuarios WHERE documento = ? AND contrasenia = ?",
      [documento, contrasenia]
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
      // expiresIn: "1m",
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

/**---------------------------------------------
 * |  Funcion para recuperar la contraseña
 ---------------------------------------------*/
const resetPass = async (email) => {
  try {
    const [result] = await pool.query(
      "SELECT contrasenia FROM usuarios WHERE email = ?",
      email
    );
    if (result[0].contrasenia.length !== 0) {
      return result[0].contrasenia;
    }
    return "";
  } catch (error) {
    return "";
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
const recoveryEmail = async (req, res) => {
  try {
    const email = req.body.email;

    const password = await resetPass(email);

    if (password.length !== 0) {
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
                    ${password}</strong
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
      </body>`,
      };

      transport.sendMail(mailOptions, (error) => {
        if (error) {
          return res
            .status(500)
            .send(`Error al enviar el correo de recuperación a ${email}.`);
        } else {
          return res
            .status(200)
            .json({ message: "Correo enviado correctamente" });
        }
      });
    } else {
      return res.status(404).json({ message: `Usuario no encontrado` });
    }
  } catch (error) {
    return res.status(500).json({
      message: `Error al recuperar contraseña detalles ${error.message}`,
    });
  }
};

/**------------------------------------------
 * |  Controlador del registro de usuario
 ------------------------------------------*/
const registerUser = async (req, res) => {
  try {
    const {
      tipo_documento,
      documento,
      nombre_completo,
      cargo,
      email,
      telefono,
      dependencia,
      contrasenia,
      rol_id,
    } = req.body;

    const [result] = await pool.query(
      "INSERT INTO usuarios(nombre_completo, email, contrasenia, tipo_documento, documento, telefono, cargo, dependencia, rol_id)VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [nombre_completo, email, contrasenia, tipo_documento, documento, telefono, cargo, dependencia, rol_id]
    );

    if (result.affectedRows !== 0) {
      res.status(200).json({ messge: "Registro agregado exitosamente." });
    } else {
      return res
        .status(500)
        .json({ message: "Error al intentar registrarse." });
    }
  } catch (error) {
    res.status(500).json({
      message: `Error al intentar registrarse detalles: ${error.message}`,
    });
  } 
};
/**------------------------------------------
 * |  Controlador del registro de usuarios 
 ------------------------------------------*/
const registerUsers = async (req, res) => {
  
  sequelize.sync()
  .then(() => {
    console.log('');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

  const buscarRolAprendiz = async () => {
    try {
      if(req.body.cargo !== "Aprendiz"){
        return
      }
      const [rows] = await pool.execute("SELECT * FROM roles");
      const registrosAprendiz = rows.filter(item => item.nombre === req.body.cargo);
      return registrosAprendiz[0].id;
    } catch (error) {
      throw error;
    }
  };

  try {
    const rolAprendiz = await buscarRolAprendiz();
    const {data} = req.body;
    if (data) {
      data.map((usuario,index) => {
        usuarios
          .create({
            nombre_completo: usuario["Nombre Completo"],
            telefono: usuario.Telefono,
            tipo_documento: usuario["Tipo documento"],
            email: usuario.Email,
            cargo: usuario.Cargo,
            dependencia: usuario.Dependencia,
            documento: usuario.Documento,
            contrasenia: v4().substring(0, 8),
            rol_id: rolAprendiz
          })
          .then((usuarioCreado) => {
            console.log("Registro creado con éxito:", usuarioCreado.toJSON());
          })
          .catch((error) => {
            console.error("Error al crear el registro:", error);
          });
      });
    } else {
      return res
        .status(500)
        .json({ message: "Error al intentar registrarse." });
    }
  } catch (error) {
    res.status(500).json({
      message: `Error al intentar registrarse detalles: ${error.message}`,
    });
  }
};

module.exports = {
  login,
  recoveryEmail,
  registerUser,
  recoveryEmail,
  registerUsers,
  secretKey,
};
