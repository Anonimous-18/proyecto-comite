const nodemailer = require("nodemailer");
const { EMAIL, EMAIL_PASSWORD } = require("../config");
const {
  comites,
  aprendices_implicados,
  roles,
  usuarios,
} = require("../models");

/**--------------------------------
 * |  Remitente del email
 * --------------------------------*/
const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: `${EMAIL}`,
    pass: `${EMAIL_PASSWORD}`,
  },
});

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
      /**-----------------------------------------
       * | Envio de la notificación al gestor de
       * | solicitud de citación a comite
       * ------------------------------------------*/
      const rol = await roles.findAll({
        where: { nombre: "Administrador" || "administrador" },
      });

      if (rol && rol[0] && rol[0].email) {
        /**----------------------------------------------
         * | Si existe el rol gestor buscamos un usuario
         * | Con ese rol id osea gestor
         * ----------------------------------------------*/
        const gestor = await usuarios.findAll({ where: { rol_id: rol[0].id } });

        if (gestor && gestor.length !== 0) {
          /**-----------------------
           * | Email del gestor
           * -----------------------*/
          const email = gestor[0].email;

          const mailOptions = {
            from: `${EMAIL}`,
            to: email,
            subject: "Solicitud de Citación a Comite",
            html: `<p>
          Solicitud de comite del instructor Manuel Felipe
        </p>`,
          };
          await transport.sendMail(mailOptions);
        }
      }

      req.comIdCreado = result.dataValues.id;
      /**---------------------------------------
       * | Agregamos los aprendices implicados
       * ---------------------------------------*/

      const comite = result.dataValues.id;

      const aprendicesImplicado = req.body.aprendices_implicados.split(",");
      const creaciones = aprendicesImplicado.map(async (aprendiz) => {
        const usuario = await usuarios.findOne({
          where: { documento: aprendiz },
        });

        if (usuario) {
          const nuevoAprendiz = await aprendices_implicados.create({
            documento: aprendiz,
            comite_fk: comite,
            usuario_id: usuario.id,
            tipo_documento: "CC",
          });
          return nuevoAprendiz;
        }
        return null;
      });

      const resulAgregarApre = await Promise.all(creaciones);
      req.resulAgregarApre = resulAgregarApre;
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
    }

    return res
      .status(404)
      .json({ message: "No existe un comite con este id." });
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
        .json({ message: "No existe un comite con este id." });
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
  createComites,
  getComites,
  deleteComite,
  updateComite,
  comitebyId,
  getAprendicesImplicados,
};
