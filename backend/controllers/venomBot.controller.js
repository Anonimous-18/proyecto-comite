const path = require("path");
const venom = require("venom-bot");
const fs = require("fs")

/**------------------------------------------------------------
 * 1. Mensaje normal
 * 2. Recibir archivo y reenviar
 * 3. Recibir una ruta y busque el archivo en el directorio
 * ------------------------------------------------------------*/

const envioMensaje = (req, res) => {
  //   req.app.userData.telefono = "3013816950";
  const numero = "3016542310";
  //   const id = req.app.userData.id;
  let sesion = null;
  if (numero) {
    sesion = numero;
  } else sesion = id;

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
          `${__dirname}/qrWhatsapp/qr${sesion}.png`,
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

      const base64File = fs.readFileSync(rutaArchivo, { encoding: "base64" });

      // const result = await client.sendFile(
      //   "3016542310@c.us",
      //   `${rutaArchivo}`,
      //   archivo.filename,
      //   captionText
      // );

      const result = await client.sendFileFromBase64(
        "3016542310@c.us",
        base64File,
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
    } else {
      const result = await client.sendText("3016542310@c.us", "Hola Mundo");

      if (result && result) {
        console.log("Mensaje enviado, id: ", result); // En caso de éxito se imprimirá el id del mensaje
        return res.status(200).json({ result });
      } else {
        return res.status(500).json({ error: "Error al enviar el mensaje 1." });
      }
    }
  } catch (error) {
    console.error("Error al enviar mensaje: ", error); // En caso de error se imprimirá el error
    res.status(500).send({ error: "Error al enviar el mensaje 2." });
  }
};

module.exports = { envioMensaje };
