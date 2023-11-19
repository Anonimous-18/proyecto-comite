const { comites, aprendices_implicados, usuarios } = require("../models");
const fs = require("fs");
const Docxtemplater = require("docxtemplater");
const PizZip = require("pizzip");

const crearActa =  (req, res) => {
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

/**--------------------------------
 * funcion para crear un comite
 --------------------------------*/
const createComites = async (req, res) => {
  try {
    const { file } = req;
    const evidencia = file.filename;
    const result = await comites.create({
      articulos: req.body.articulos.toString(),
      instructor_fk: req.body.instructor_fk,
      tipo_falta: req.body.tipo_falta,
      descripcion_solicitud: req.body.descripcion_solicitud,
      evidencia,
    });
    /**----------------------------------------------------------
     * | Este es id del comite creado: result.dataValues.id
     * ----------------------------------------------------------*/
    if (result.dataValues.id !== 0) {
      try {
        /**---------------------------------------
         * | Agregamos los aprendices implicados
         * ---------------------------------------*/
        
        const comite = result.dataValues.id;
        req.acta = req.body;
        req.body.aprendices_implicados.split(",").forEach(async (aprendiz) => {

          const usuario_id = (await usuarios.findOne({ where:{ documento: aprendiz }})).id

          await aprendices_implicados.create({
            documento: aprendiz,
            comite_fk: comite,
            usuario_id 
          });
        });
        return res.sendStatus(204);
      } catch (error) {
        //console.log(error);
        return res.status(500).json({ message: error.message });
      }
    }

    return res.status(500).json({ message: "Error al crear un nuevo comite." });
  } catch (error) {
    //console.log(error);
    res
      .status(500)
      .json({ message: `Error al crear un nuevo comite: ${error.message}` });
  }
};

/**-----------------------------------------
 * funcion para obtener todos los comites
 -----------------------------------------*/
const getComites = async (req, res) => {
  try {
    const result = await comites.findAll();

    if (result.length !== 0) {
      return res.status(200).json(result);
    }
    return res.status(404).json({ message: "No hay comites" });
  } catch (error) {
    res.status(500).json({
      message: `Error al obtener todos los comites detalles: ${error.message}`,
    });
  }
};

/**-----------------------------------------
 * funcion para obtener un comite por id
 -----------------------------------------*/
const comitebyId = async (req, res) => {
  try {
    const { id } = req.params;

    const comite = await comites.findOne({ where: { id } });

    if (comite) {
      return res.status(200).json(comite);
    } else {
      return res.status(404).json({ message: `No se encontraron comites.` });
    }
  } catch (error) {
    res.status(500).json({
      message: `Error al obtener un comite detalles: ${error.message}`,
    });
  }
};

/**----------------------------------
 * funcion para actualizar un comite
 ----------------------------------*/
const updateComite = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await comites.update(req.body, {
      where: { id },
    });
    if (updated) {
      const actualizado = await comites.findOne({ where: { id } });
      return res.status(200).json(actualizado);
    } else {
      return res
        .status(404)
        .json({ message: "No existe un usuario con este id." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**--------------------------------
 * funciones para eliminar un comite
 --------------------------------*/
const deleteComite = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await comites.destroy({
      where: { id },
    });
    if (deleted) {
      return res.json({ message: "rol eliminado" });
    } else {
      return res
        .status(404)
        .json({ message: "No existe un usuario con este id." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAprendicesImplicados = async (req, res) => {
  try {
    const { comite_fk } = req.body;
    const aprendices = await aprendices_implicados.findAll();

    const filtrados = await aprendices.filter(
      (aprendiz) => aprendiz.comite_fk === comite_fk
    );

    const buscados = await filtrados.map(async (aprendiz) => {
      const usuario = await usuarios.findOne({
        where: { documento: aprendiz.dataValues.documento },
      });
      return usuario.dataValues;
    });

    const aprendicesFiltrados = await Promise.all(buscados);

    if (aprendices && buscados && aprendicesFiltrados) {
      return res.status(200).json(aprendicesFiltrados);
    }
    return res
      .status(404)
      .json({ message: `No se encontraron aprendices para ese comite` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// updatecomite,
module.exports = {
  crearActa,
  createComites,
  getComites,
  deleteComite,
  updateComite,
  comitebyId,
  getAprendicesImplicados,
};
