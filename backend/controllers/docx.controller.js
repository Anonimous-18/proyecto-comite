const {
  aprendices_implicados,
  comites,
  usuarios,
  ficha,
  aprendices,
  articulos,
} = require("../models");
const fs = require("fs");
const Docxtemplater = require("docxtemplater");
var officegen = require("officegen");
const PizZip = require("pizzip");
/*
{
    "actaNumero": "1",
    "ciudadFecha": "Manizales, 24 de noviembre de 2023",
    "HoraUno": "12:48",
    "HoraDos": "12:48",
    "lugarEnlace": "https://meet...",
    "programaNom": "ADSI",
    "ficha": "250678453",
    "gestorFicha": "Brayan Gomez Noguera",
    "InstructoresCita": "Alejandro Toro",
    "objtivoRenion": "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    "caso1": "Caso 1",
    "nombre1": "aprendiz Dos",
    "contrato1": "no",
    "fcComite1": "Sin comites",
    "descripccion1": "No hay descripccion",
    "caso2": "Caso 2",
    "nombre2": "aprendiz Tres",
    "contrato2": "si",
    "fcComite2": "Sin comites",
    "descripccion2": "No hay descripccion",
    "desrrolloReunion": [
        {
            "cargoCaso_4": "APRENDIZ",
            "nombre_4": "Alejandra",
            "descripccionCaso_4": "Opinion de alejandra"
        },
        {
            "cargoCaso_5": "APOYO ADMINISTRATIVO A COORDINACIÓN ACADÉMICA DEL CENTRO",
            "nombre_5": "Alejandro",
            "descripccionCaso_5": "Opinion de alejandro"
        }
    ]
}
*/
/**--------------------------------
 * funcion para crear word de citacion
 --------------------------------*/
const crearActa = async (req, res) => {
  const actaNumero = req.body.actaNumero;
  const ciudadFecha = req.body.ciudadFecha;
  const HoraUno = req.body.HoraUno;
  const HoraDos = req.body.HoraDos;
  const lugarEnlace = req.body.lugarEnlace;
  const objtivoRenion = req.body.objtivoRenion;
  const programaNom = req.body.programaNom;
  const ficha = req.body.ficha;
  const InstructoresCita = req.body.InstructoresCita;
  const gestorFicha = req.body.gestorFicha;
  const desrrolloReunion = req.body.desrrolloReunion;

  const acta = {
    actaNumero,
    ciudadFecha,
    HoraUno,
    HoraDos,
    lugarEnlace,
    objtivoRenion,
    programaNom,
    ficha,
    gestorFicha,
    InstructoresCita,
  };
  const idComite = req.app.datosBd.idComite;

  const casos = req.app.implicados.map(aprendiz => ({
    documento: aprendiz.dataValues.documento,
    tipo_documento: aprendiz.dataValues.tipo_documento,
    index: aprendiz.dataValues.index,
    contrato: aprendiz.dataValues.contrato,
    nombre: aprendiz.dataValues.nombre,
    fcComite: aprendiz.dataValues.fcComite,
    descripcion: aprendiz.dataValues.descripcion
   }));
   
  const entradaActa = `${__dirname}/../documentos_comite/acta-variables.docx`;
  const actaBorrador = `${__dirname}/../documentos_comite/reuniones/actaBorrador-${idComite}.docx`;

  // Cargar un archivo .docx
  const content = fs.readFileSync(entradaActa, "binary");
  const zip = new PizZip(content);

  const doc = new Docxtemplater(zip);
  doc.setData({ ...acta, casos });

  try {
    doc.render();
    // Generar el archivo .docx modificado
    const buffer1 = doc.getZip().generate({ type: "nodebuffer" });
    fs.writeFileSync(actaBorrador, buffer1);
  } catch (error) {
    const e = {
      message: error.message,
      name: error.name,
      stack: error.stack,
      properties: error.properties,
    };
    res.status(500).json({ error: "Hubo un error al obtener los datos", e });
    throw e;
  }

  const salidaReunion = `${__dirname}/../documentos_comite/reuniones/reunionDesarrollo-${idComite}.docx`;
  const reunion = desrrolloReunion.map((obj) => {
    let newObj = {};
    Object.entries(obj).forEach(([key, value]) => {
      let newKey = key.replace(/_\d+$/, ""); // Elimina la parte de la clave que termina con un número
      newObj[newKey] = value;
    });
    return newObj;
  });

  const docOficegen = officegen("docx");
  docOficegen.on("error", function (err) {
    console.log(err);
  });

  let pObj0 = docOficegen.createP();

  pObj0.addText("DESARROLLO DE LA REUNIÓN: ", {
    bold: true,
    font_face: "Calibri",
    font_size: 10,
    color: "000000",
    shading: {
      fill: "FFFF00",
      color: "FFFF00",
      val: "clear",
    },
  });

  pObj0.addText("\n");

  let cont = 1;

  reunion.map((item) => {
    let pObj = docOficegen.createP();

    if (item.cargoCaso === "CASO") {
      pObj.addText(`${item.cargoCaso} ${cont}`, {
        underline: true,
        bold: true,
        font_face: "Calibri",
        font_size: 10,
        color: "000000",
        shading: {
          fill: "FFFF00",
          color: "FFFF00",
          val: "clear",
        },
      });
      pObj.addText("\n");
      pObj.addText(item.nombre, {
        underline: true,
        bold: true,
        font_face: "Calibri",
        font_size: 10,
        shading: {
          fill: "FFFF00",
          val: "clear",
        },
      });
      pObj.addText("\n");
      pObj.addText(item.descripccionCaso, {
        font_face: "Calibri",
        font_size: 10,
        shading: {
          fill: "FFFF00",
          val: "clear",
        },
      });
      pObj.addText("\n");
      cont++;
    } else {
      pObj.addText(`${item.nombre} (${item.cargoCaso}):`, {
        underline: true,
        bold: true,
        font_face: "Calibri",
        font_size: 10,
        color: "000000",
        shading: {
          fill: "FFFF00",
          color: "FFFF00",
          val: "clear",
        },
      });
      pObj.addText("\n");
      pObj.addText(item.descripccionCaso, {
        font_face: "Calibri",
        font_size: 10,
        shading: {
          fill: "FFFF00",
          val: "clear",
        },
      });
      pObj.addText("\n");
    }
  });

  let out = fs.createWriteStream(salidaReunion);

  out.on("error", function (err) {
    console.log(err);
  });

  docOficegen.generate(out);
  res.status(200).json(acta);
};

/**--------------------------------
 * funcion para buscar implicados
 --------------------------------*/
const actaCasos = async (req, res, next) => {
  const idComite = req.body.idComite;
  let docuImpli = 0;
  try {
    const bucarAprediz = async (
      documento = 0,
      model = "aprendices",
      id = null
    ) => {
      const result =
        model === "aprendices"
          ? await aprendices.findOne({
              where: { documento: documento },
            })
          : model === "usuarios"
          ? await usuarios.findOne({
              where: { documento: documento },
            })
          : await usuarios.findOne({
              where: { id },
            });

      if (result && result.length !== 0) {
        return result;
      }
      return res.status(404).json({ message: "No se encontro aprendiz" });
    };

    const buscarDatos = async (comiteId = 0) => {
      const aprendicesIm = await aprendices_implicados.findAll({
        where: { comite_fk: comiteId },
        include: [comites],
      });

      if (aprendicesIm && aprendicesIm.length > 0) {
        docuImpli = aprendicesIm[0].documento;

        const casos = await Promise.all(
          aprendicesIm.map(async (implicado, index) => {
            implicado.dataValues.index = index + 1;
            const aprediz = await bucarAprediz(implicado.documento);
            const usua = await bucarAprediz(implicado.documento, "usuarios");
            implicado.dataValues.contrato = aprediz.contrato;
            implicado.dataValues.nombre = usua.nombre_completo;
            implicado.dataValues.fcComite = "Sin comites";
            implicado.dataValues.descripcion = "No hay descripccion";
            delete implicado.dataValues.id;
            delete implicado.dataValues.comite;
            delete implicado.dataValues.createdAt;
            delete implicado.dataValues.updatedAt;
            delete implicado.dataValues.usuario_id;
            delete implicado.dataValues.comite_fk;
            return implicado;
          })
        );

        return casos;
      } else {
        res
          .status(404)
          .json({ mensaje: "no hay ningun aprendiz con el comite dado" });
        return;
      }
    };

    const buscarFicha = async (docuImpli) => {
      const aprendiz = await aprendices.findOne({
        where: { documento: docuImpli },
        include: [ficha],
      });
      if (aprendiz.ficha) {
        return aprendiz.ficha;
      } else {
        res.status(404).json({
          mensaje: `error no hay una ficha para el aprendiz con documento ${docuImpli}`,
        });
        return;
      }
    };

    const implicados = await buscarDatos(idComite);
    const fichaActa = await buscarFicha(docuImpli);
    const gestorFicha = await bucarAprediz(0, "", fichaActa.instructor_id);
    const InstructoresCita = await bucarAprediz(
      0,
      "",
      implicados[0].comite.instructor_fk
    );
    let datosBd = {};

    datosBd.programaNom = fichaActa.programa;
    datosBd.ficha = fichaActa.codigo;
    datosBd.gestorFicha = gestorFicha.nombre_completo;
    datosBd.InstructoresCita = InstructoresCita.nombre_completo;
    datosBd.idComite = idComite;

    req.datosBd = datosBd;
    req.app.datosBd = datosBd;
    req.app.implicados = implicados;

    res.status(200).json({
      implicados,
      datosBd,
    });
    return;
  } catch (error) {
    const e = {
      message: error.message,
      name: error.name,
      stack: error.stack,
      properties: error.properties,
    };
    res.status(500).json({ error: "Hubo un error al obtener los datos", e });
    throw e;
  }
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
      console.log(datosFicha);

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
  const salida = `${__dirname}/../documentos_comite/citacionesCreadas/citacion-${idcomite}.docx`;

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
    res.status(500).json({ error: "Hubo un error al obtener los datos", e });
    throw e;
  }
};

module.exports = { citacion, crearActa, actaCasos };
