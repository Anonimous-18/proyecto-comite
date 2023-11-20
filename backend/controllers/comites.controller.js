const {
  comites,
  aprendices_implicados,
  usuarios,
  ficha,
  aprendices,
  articulos,
  capitulos
} = require("../models");
const fs = require("fs");
const Docxtemplater = require("docxtemplater");
const PizZip = require("pizzip");
const { log } = require("console");

const crearActa = async (req, res) => {
  const involucrados = [];
  let cita = {
    capitulosInfligidos: "",
    capituloInvolucrado: ""
  };
  const aprendicesIds = req.body.aprendices_implicados.split(",");
  const articulosIds = req.body.articulos.split(",");
  console.log(articulosIds);
  function formatearFecha(fecha) {
    const meses = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
  
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
  
    return `${dia} de ${mes} de ${año}`;
  }
  
  // Uso de la función con la fecha actual
  const fechaActual = new Date();
  const fechaFormateada = formatearFecha(fechaActual);

  const obtenerDatosFicha = async (aprendizId) => {
    const datosAprendiz = await aprendices.findOne({
      where: { documento: aprendizId },
    });
    if (datosAprendiz) {
      const fichaId = datosAprendiz.ficha_fk;
      const datosFicha = await ficha.findOne({ where: { id: fichaId } });
      datosFicha.instructor = ( await usuarios.findOne( { where:{ id : datosFicha.instructor_id } } ) ).nombre_completo;
      console.log(datosFicha);
      return datosFicha ? datosFicha : null;
    }
    return null;
  };

  const obtenerDatosArticulo = async (articuloId) => {
    const datosArticulo = await articulos.findOne({
      where: { art_id: articuloId },
    });
    if (datosArticulo) {
      return datosArticulo 
    }
    return null;
  };

  const obtenerInformacionAprendices = async (aprendicesIds,articulosIds) => {
    const intrucSolici = (await usuarios.findOne({where:{ id:req.body.instructor_fk }})).nombre_completo
    for (const articuloId of articulosIds) {
      const articulo = await obtenerDatosArticulo(articuloId)
      cita.capitulosInfligidos += `capitulo ${articulo.cap_id} del articulo ${articuloId}, `
      cita.capituloInvolucrado += `capitulo ${articulo.cap_id} del articulo ${articuloId} dice: ${articulo.art_descripcion} `
    }
    for (let index = 0; index < aprendicesIds.length; index++) {
      const datosAprendiz = await aprendices.findOne({
        where: { documento: aprendicesIds[index] },
      });

      const datosUsuario = await usuarios.findOne({
        where: { documento: aprendicesIds[index] },
      });

      if (datosUsuario) {
        const ficha = await obtenerDatosFicha(aprendicesIds[index]);;
        if (index === 0) {
          cita.programa = ficha.programa;
          cita.primerApreNom = datosUsuario.nombre_completo;
          cita.primerApreDoc = datosUsuario.documento;
          cita.primerApreficha = ficha.codigo;
          cita.primerAprCorreo = datosUsuario.email  ;
          cita.primerAprProg = ficha.programa;
          cita.fechaActual = fechaFormateada;
          cita.intrucSolici = intrucSolici;
          cita.gestorFicha = ficha.instructor;
          cita.desFalta = req.body.descripcion_solicitud;
          cita.contrato = datosAprendiz.contrato;
          cita.historialAcade = datosAprendiz.historialAcademico;
          cita.tipoFalta = req.body.tipo_falta
        }

        involucrados.push({
          nombreTa: datosUsuario.nombre_completo,
          documentoTa: datosUsuario.documento,
          idTa: ficha.codigo,
        });
      }
    }
  };

  
  try {
    await obtenerInformacionAprendices(aprendicesIds,articulosIds);
    res.status(200).json(cita);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al obtener los datos" });
  }
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
  //     console.log(JSON.stringify({ error: e }));
  //     throw error;
  //   }
};

/**--------------------------------
 * funcion para crear un comite
 --------------------------------*/
const createComites = async (req, res, next) => {
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
      /**---------------------------------------
       * | Agregamos los aprendices implicados
       * ---------------------------------------*/

      const comite = result.dataValues.id;
      req.acta = req.body;
      req.body.aprendices_implicados.split(",").forEach(async (aprendiz) => {
        const usuario_id = (
          await usuarios.findOne({ where: { documento: aprendiz } })
        ).id;

        await aprendices_implicados.create({
          documento: aprendiz,
          comite_fk: comite,
          usuario_id,
        });
      });
      res.sendStatus(204);
      return next();
    }

    return res.status(500).json({ message: "Error al crear un nuevo comite." });
  } catch (error) {
    console.log(error);
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
