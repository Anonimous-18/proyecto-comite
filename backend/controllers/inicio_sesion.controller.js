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
    
    const userDB = result[0];
    console.log(result);
    const user = {
      nombre_completo : userDB.nombre_completo,
      email : userDB.email,
      creado : userDB.creado,
      tipo_documento : userDB.tipo_document,
      documento : userDB.documento,
      rol_id : userDB.rol_id
    };

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
  const enviarUsuario = (resultadosInsercion) => {
    try {
      const errorUsuarios = resultadosInsercion.reduce((acumulador, usuarioEstado) => {
          if (usuarioEstado.usuarioCreado) {
            const email = usuarioEstado.usuarioCreado.dataValues.email;
            const documento = usuarioEstado.usuarioCreado.dataValues.documento;
            const contrasenia = usuarioEstado.usuarioCreado.dataValues.contrasenia;
            const nombre = usuarioEstado.usuarioCreado.dataValues.nombre_completo;
            const mailOptions = {
              from: `${EMAIL}`,
              to: email,
              subject: "Creacion de usuario",
              html: `<div id="m_4509833478349836683:o0" style="font-family:Arial,sans-serif;background-color:#ffffff;width:100%;padding:1.75rem;border:2px solid #1e3a8a;border-radius:0.5rem">
              Estimado(a) ${nombre}, hemos creado tu usuario en nuestro aplicativo para que sigas tu proceso de
              comité. Intenta ingresar con tu respectivo nombre de usuario y contraseña.<br><br>
              Usuario: <b>${documento}</b><br>
              Contraseña: <b>${contrasenia}</b><br><br>
              Le recordamos que esta dirección de e-mail es utilizada solamente para los envíos de la información
              solicitada. Por favor, no responda con consultas personales, ya que no podrán ser respondidas.<br>
              Cordialmente.<br><br>
              SE-JustAPP
          </div>`,
            };
            transport.sendMail(mailOptions, (error) => {
              if (error) {
                return res
                  .status(500)
                  .send(
                    `Error al enviar el correo de recuperación a ${email}.`
                  );
              } else {
                return res
                  .status(200)
                  .json({ message: "Correo enviado correctamente" });
              }
            });

            console.log("prueba");
          }else if (usuarioEstado.error) {
            acumulador.push(usuarioEstado.error)
          }
          return acumulador;
        },
        []
      );
      console.log(errorUsuarios);
    } catch (error) {
      return res.status(500).json({
        message: `Error detalles ${error.message}`,
      });
    }
  };

  try {
    // Conecta a la base de datos
    await sequelize.sync();
    const rolAprendiz = await buscarRolAprendiz();
    // Función asincrónica para crear usuarios y manejar errores
    const crearUsuarioConErrorHandling = async (usuario) => {
      try {
        const usuarioCreado = await usuarios.create({
          nombre_completo: usuario["Nombre Completo"],
          telefono: usuario.Telefono,
          tipo_documento: usuario["Tipo documento"],
          email: usuario.Email,
          cargo: usuario.Cargo,
          dependencia: usuario.Dependencia,
          documento: usuario.Documento,
          contrasenia: v4().substring(0, 8),
          rol_id: rolAprendiz,
        });

        return { usuarioCreado, error: null };
      } catch (error) {
        return { usuarioCreado: null, error };
      }
    };

    const { data } = req.body;

    if (data && Array.isArray(data)) {
      // Crear un arreglo de promesas usando async/await
      const promesasInsercion = data.map(crearUsuarioConErrorHandling);

      // Esperar a que todas las inserciones se completen
      const resultadosInsercion = await Promise.all(promesasInsercion);// Envía una respuesta con información sobre los resultados de la inserción
      enviarUsuario(resultadosInsercion);
      res.status(200).json({ resultadosInsercion });
    } else {
      return res
        .status(400)
        .json({ message: "Datos inválidos o faltantes en la solicitud." });
    }
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    res.status(500).json({
      message: `Error al intentar registrarse: ${error.message}`,
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
