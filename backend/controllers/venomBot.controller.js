const venom = require("venom-bot");

const envioMensaje = (req, res) => {
//   req.app.userData.telefono = "3013816950";
  const numero = "3013816951";
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
      start(client);
    })
    .catch((erro) => {
      console.log(erro.name);
      res.status(500).send({
        error: "Error al crear la sesion, compruebe su conexion a internet.",
      });
    });

  function start(client) {
    client
      .sendText("3013816950@c.us", "Hola Mundo")
      .then((result) => {
        console.log("Mensaje enviado, id: ", result); // En caso de éxito se imprimirá el id del mensaje
        res.status(200).json({ result });
      })
      .catch((erro) => {
        console.error("Error al enviar mensaje: ", erro); // En caso de error se imprimirá el error
        res.status(500).send({ error: "Error al enviar el mensaje." });
      });
  }
};

module.exports = { envioMensaje };
