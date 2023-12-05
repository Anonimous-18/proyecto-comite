const path = require("path");
const venom = require("venom-bot");
const { roles, usuarios } = require("../models");

/**------------------------------------------------------------
 * 1. Mensaje normal
 * 2. Recibir archivo y reenviar
 * 3. Recibir una ruta y busque el archivo en el directorio
 * ------------------------------------------------------------*/

const envioMensaje = (req, res) => {
  const sesion = "justApp"
  venom
    .create(
      sesion,
      (base64Qr, asciiQR, attempts, urlCode) => {
        console.log(asciiQR); // Optional to log the QR in the terminal
        const matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
          response = {};
        if (matches.length !== 3) {
          return new Error("Invalid input string");
        }
        response.type = matches[1];
        response.data = new Buffer.from(matches[2], "base64");

        const imageBuffer = response;
        require("fs").writeFile(
          `${__dirname}/qrWhatsapp/${sesion}qr.png`,
          imageBuffer["data"],
          "binary",
          (err) => {
            if (err != null) {
              console.log(err);
            }
          }
        );
      },
      undefined,
      { logQR: false }
    )
    .then((client) => {
      /**----------------------
       * | Aqui empieza venom
       * ----------------------*/
      start(req, res, client);
    })
    .catch((erro) => {
      console.log(erro.name);
      res.status(500).send({
        error: "Error al crear la sesion, compruebe su conexion a internet.",
      });
    });
};

const start = async (req, res, client) => {
  try {
    /**----------------
     * Para el archivo
     * ----------------*/
    if (req.file) {
      const archivo = req.file;
      const rutaArchivo = path.join(__dirname, "../uploads/", archivo.filename);
      const captionText = "Descripción del archivo";

      console.log(rutaArchivo);

      const result = await client.sendFile(
        "3016542310@c.us",
        `${rutaArchivo}`,
        archivo.filename,
        captionText
      );

      if (result && result)
        return res.json({
          mensaje: "Archivo enviado con éxito",
          archivo: result,
        });
      else
        return res.status(500).json({ error: "Error al enviar el mensaje 1." });

      /**---------------------------
       * Para el mensaje de texto
       * ---------------------------*/
    } else if (req.body) {
      const rol = await roles.findAll({
        where: { nombre: "Administrador" || "administrador" },
      });

      if (rol && rol[0] && rol[0].id) {
        const gestor = await usuarios.findAll({ where: { rol_id: rol[0].id } });

        if (gestor && gestor) {
          const celular = gestor[0].telefono;
          const instructor = req.body.instructor || "";

          const fechaHoraActual = new Date();
          const fechaHoraFormateada = fechaHoraActual.toLocaleString();

          console.log(celular, instructor);

          const result = await client.sendText(
            `${celular}@c.us`,
            `El instructor *${instructor}* hizo una solicitud de comité el dia ${fechaHoraFormateada} Para ver los detalles de esta solicitud, vaya a SE-JustApp.`
          );

          if (result && result) {
            console.log("Mensaje enviado, id: ", result); // En caso de éxito se imprimirá el id del mensaje
            return res.status(200).json({ result });
          } else {
            return res
              .status(500)
              .json({ error: "Error al enviar el mensaje 1." });
          }
        } else {
          return res.status(404).json({ msg: "No existe un gestor." });
        }
      } else {
        return res.status(404).json({ msg: "No existe un gestor." });
      }
    } else {
      return;
    }
  } catch (error) {
    console.error("Error al enviar mensaje: ", error); // En caso de error se imprimirá el error
    res.status(500).send({ error: "Error al enviar el mensaje 2." });
  }
};

module.exports = { envioMensaje };
