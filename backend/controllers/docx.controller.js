const {
  aprendices_implicados,
  usuarios,
  ficha,
  aprendices,
  articulos,
} = require("../models");
const fs = require("fs");
const Docxtemplater = require("docxtemplater");
const PizZip = require("pizzip");

/**--------------------------------
 * funcion para crear word de citacion
 --------------------------------*/
const crearActa = async (req, res) => {
  const actaNumero = req.body.actaNumero;
  const ciudadFecha = req.bodyciudadFecha;
  const HoraUno = req.body.HoraUno;
  const HoraDos = req.body.HoraDos;
  const lugarEnlace = req.body.lugarEnlace;
  const objtivoRenion = req.body.objtivoRenion;

  const acta = {
    actaNumero,
    ciudadFecha,
    HoraUno,
    HoraDos,
    lugarEnlace,
    objtivoRenion,
  };
};
/**--------------------------------
 * funcion para buscar implicados
 --------------------------------*/
const actaCasos = async (req, res) => {
  const idComite = req.body.idComite;
  const buscarDatos = async () => {
    const aprendices = await aprendices_implicados.findAll({
      where: { comite_fk: idComite },
    });
    if (aprendices) {
      return aprendices;
    }
    return null;
  };
  const apreImplicados = await buscarDatos();
  if (apreImplicados) {
    res.status(200).json(apreImplicados);
    return;
  } else {
    res
      .status(400)
      .json({ mensaje: "no hay ningun aprendiz con el comite dado" });
    return;
  }
  //programaNom, ficha, InstructoresCita, gestorFicha;
};

/**--------------------------------
 * funcion para crear word de citacion
 --------------------------------*/
const citacion = async (req, res) => {
  const involucrados = [];
  let cita = {
    capitulosInfligidos: "",
    capituloInvolucrado: "",
  };
  const aprendicesIds = req.body.aprendices_implicados.split(",");
  const articulosIds = req.body.articulos.toString().split(",");
  function formatearFecha(fecha) {
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
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
      datosFicha.instructor = (
        await usuarios.findOne({ where: { id: datosFicha.instructor_id } })
      ).nombre_completo;
      return datosFicha ? datosFicha : null;
    }
    return null;
  };

  const obtenerDatosArticulo = async (articuloId) => {
    const datosArticulo = await articulos.findOne({
      where: { art_id: articuloId },
    });
    if (datosArticulo) {
      return datosArticulo;
    }
    return null;
  };

  const obtenerInformacionAprendices = async (aprendicesIds, articulosIds) => {
    const intrucSolici = (
      await usuarios.findOne({ where: { id: req.body.instructor_fk } })
    ).nombre_completo;

    articulosIds.map(async (articuloId, index) => {
      const articulo = await obtenerDatosArticulo(articuloId);
      cita.capitulosInfligidos += `Capitulo ${articulo.cap_id} del articulo ${articuloId}`;
      cita.capituloInvolucrado += `Capitulo ${articulo.cap_id} del articulo ${articuloId} dice: ${articulo.art_descripcion}`;
    });

    for (let index = 0; index < aprendicesIds.length; index++) {
      const datosAprendiz = await aprendices.findOne({
        where: { documento: aprendicesIds[index] },
      });

      const datosUsuario = await usuarios.findOne({
        where: { documento: aprendicesIds[index] },
      });

      if (datosUsuario && datosAprendiz) {
        const ficha = await obtenerDatosFicha(aprendicesIds[index]);
        if (index === 0 && ficha) {
          cita.programa = ficha.programa;
          cita.primerApreNom = datosUsuario.nombre_completo;
          cita.primerApreDoc = datosUsuario.documento;
          cita.primerApreficha = ficha.codigo;
          cita.primerAprCorreo = datosUsuario.email;
          cita.primerAprProg = ficha.programa;
          cita.fechaActual = fechaFormateada;
          cita.intrucSolici = intrucSolici;
          cita.gestorFicha = ficha.instructor;
          cita.desFalta = req.body.descripcion_solicitud;
          cita.contrato = datosAprendiz.contrato;
          cita.historialAcade = datosAprendiz.historialAcademico;
          cita.tipoFalta = req.body.tipo_falta;
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
    await obtenerInformacionAprendices(aprendicesIds, articulosIds);
  } catch (error) {
    res.status(500).json({ error: "Hubo un error al obtener los datos" });
    throw error;
  }
  const idcomite = req.comIdCreado;
  const entrada = `${__dirname}/../documentos_comite/citacion-variables.docx`;
  const salida = `${__dirname}/../documentos_comite/citaciones/citacion-${idcomite}.docx`;

  // Realizar el reemplazo en el documento
  try {
    // Cargar un archivo .docx
    const content = fs.readFileSync(entrada, "binary");
    const zip = new PizZip(content);

    const doc = new Docxtemplater(zip);
    doc.setData({ ...cita, involucrados });
    doc.render();
    // Generar el archivo .docx modificado
    const buffer1 = doc.getZip().generate({ type: "nodebuffer" });
    fs.writeFileSync(salida, buffer1);
    const crearcomite = req.resulAgregarApre;
    return res.status(200).json({ cita, involucrados, crearcomite });
  } catch (error) {
    const e = {
      message: error.message,
      name: error.name,
      stack: error.stack,
      properties: error.properties,
    };
    res.status(500).json({ error: "Hubo un error al obtener los datos" }, e);
    throw e;
  }
};

module.exports = { citacion, crearActa, actaCasos };
