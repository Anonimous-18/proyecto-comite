const {
  Notificacion,
  Notificacion_Usuario,
  usuarios,
  comites,
  roles,
} = require("../models");

/**--------------------------------------------
 * | Gestion del modelo Notificacion
 * --------------------------------------------*/
const createNotificacion = async (req, res) => {
  try {
    const result = await Notificacion.create(req.body);

    if (result && result.dataValues.id !== 0) {
      /**----------------------------------------------
       * | Buscamos en roles si existe un rol gestor
       * ----------------------------------------------*/
      const rol = await roles.findAll({
        where: { nombre: "Administrador" || "administrador" },
      });

      if (rol && rol[0] && rol[0].id) {
        /**----------------------------------------------
         * | Si existe el rol gestor buscamos un usuario
         * | Con ese rol id osea gestor
         * ----------------------------------------------*/
        const gestor = await usuarios.findAll({ where: { rol_id: rol[0].id } });

        if (gestor && gestor.length !== 0) {
          /**---------------------------------------------------
           * | Y lo agregamos como receptor a la tabla intermedia
           * ---------------------------------------------------*/
          await Notificacion_Usuario.create({
            notificacion_id: result.dataValues.id,
            receptor_id: gestor[0].id,
          });
          return res.sendStatus(204);
        } else {
          return res.status(404).json({ msg: "No existe un gestor" });
        }
      } else {
        return res.status(404).json({ msg: "No existe un rol de gestor" });
      }
    }
    return res.status(500).json({ message: "Error al crear la notificacion." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNotificaciones = async (req, res) => {
  try {
    const result = await Notificacion.findAll();

    if (result.length !== 0) {
      return res.status(200).json(result);
    }
    return res.status(404).json({ message: "No hay notificaciones." });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getDetallesDeComiteNotificado = async (req, res) => {
  try {
    const { fecha } = req.params;

    const result = await comites.findOne({ where: { createdAt: fecha } });

    console.log(result);
    if (result) {
      return res.status(200).json(result);
    }
    return res.status(404).json({ message: "No hay un comite con esa fecha." });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getNotificacionesByUser = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Notificacion_Usuario.findAll({
      where: { receptor_id: id },
      include: [
        {
          model: Notificacion,
          as: "notificacion",
        },
        {
          model: usuarios,
          as: "receptor",
        },
      ],
    });

    if (result.length !== 0) {
      const notificacionDetalles = result.map(async (notificacion) => {
        const detalles = await Notificacion.findOne({
          where: { id: notificacion.notificacion_id },
          include: [{ model: usuarios, as: "remitente" }],
        });

        console.log(detalles.dataValues);

        return detalles.dataValues;
      });

      const notificaciones = await Promise.all(notificacionDetalles);

      return res.status(200).json(notificaciones);
    }
    return res
      .status(404)
      .json({ message: "No notificaciones para ese usuario." });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getNotificacionById = async (req, res) => {
  try {
    const { id } = req.params;

    const notificacion = await Notificacion.findOne({ where: { id } });

    if (notificacion) {
      return res.status(200).json(notificacion);
    } else {
      return res
        .status(404)
        .json({ message: `No se encontraron notificaciones con ese id.` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteNotificacion = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Notificacion.destroy({
      where: { id },
    });

    if (deleted) {
      return res.json({ message: "Notificacion eliminada." });
    } else {
      return res
        .status(404)
        .json({ message: "No existe una notificacion con ese id." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**--------------------------------------------
 * | Gestion del modelo Notificacion_Usuario
 * --------------------------------------------*/
const getNotificacionesUsuarios = async (req, res) => {
  try {
    const result = await Notificacion_Usuario.findAll();

    if (result.length !== 0) {
      return res.status(200).json(result);
    }
    return res
      .status(404)
      .json({ message: "No hay notificaciones con receptor." });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getNotificacionUsuarioById = async (req, res) => {
  try {
    const { id } = req.params;

    const notificacion_usuario = await Notificacion_Usuario.findOne({
      where: { id },
    });

    if (notificacion_usuario) {
      return res.status(200).json(notificacion_usuario);
    } else {
      return res.status(404).json({
        message: `No se encontraron notificaciones(con receptor) con ese id.`,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteNotificacionUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Notificacion_Usuario.destroy({
      where: { notificacion_id: id },
    });

    if (deleted) {
      await Notificacion.destroy({ where: { id: id } });
      return res.json({ message: "Notificacion con receptor eliminada." });
    } else {
      return res
        .status(404)
        .json({ message: "No existe una notificacion con ese id." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getNotificaciones,
  deleteNotificacion,
  createNotificacion,
  getNotificacionById,
  getNotificacionesByUser,
  getNotificacionesUsuarios,
  deleteNotificacionUsuario,
  getNotificacionUsuarioById,
  getDetallesDeComiteNotificado,
};
