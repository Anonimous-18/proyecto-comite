const fs = require("fs");
const Docxtemplater = require("docxtemplater");
const PizZip = require("pizzip");

const crearActa = async (req, res) => {
  console.log("entro");
  console.log(req.body);
  //   // Cargar un archivo .docx
  //   const content = fs.readFileSync(
  //     "plantilla de citación - variables.docx",
  //     "binary"
  //   );
  //   const zip = new PizZip(content);

  //   const doc = new Docxtemplater(zip);

  //   const involucrados = [
  //     {
  //       nombreTa: "Juan Pérez",
  //       documentoTa: "12345678",
  //       idTa: 1,
  //     },
  //     {
  //       nombreTa: "María Rodríguez",
  //       documentoTa: "98765432",
  //       idTa: 2,
  //     },
  //     {
  //       nombreTa: "Luis González",
  //       documentoTa: "56789012",
  //       idTa: 3,
  //     },
  //     {
  //       nombreTa: "Ana Martínez",
  //       documentoTa: "34567890",
  //       idTa: 4,
  //     },
  //   ];

  //   const dos = {
  //     programa: "ADSI",
  //   };

  //   // Realizar el reemplazo en el documento
  //   try {
  //     doc.setData({ ...dos, involucrados });
  //     doc.render();
  //     // Generar el archivo .docx modificado
  //     const buffer1 = doc.getZip().generate({ type: "nodebuffer" });
  //     fs.writeFileSync("ruta_salida.docx", buffer1);
  //   } catch (error) {
  //     const e = {
  //       message: error.message,
  //       name: error.name,
  //       stack: error.stack,
  //       properties: error.properties,
  //     };
  //     //console.log(JSON.stringify({ error: e }));
  //     throw error;
  //   }
};

module.exports = { crearActa };
