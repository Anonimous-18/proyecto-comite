const { Notificacion, Notificacion_Usuario } = require("../models");

/**--------------------------------------------
 * | Gestion del modelo Notificacion
 * --------------------------------------------*/
const createNotificacion = async (req, res) => {
  try {
    const result = await Notificacion.create(req.body);

    if (result.dataValues.id !== 0) {
      return res.sendStatus(204);
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
const createNotificacionUsuario = async (req, res) => {
  try {
    const result = await Notificacion_Usuario.create(req.body);

    if (result.dataValues.id !== 0) {
      return res.sendStatus(204);
    }
    return res
      .status(500)
      .json({ message: "Error al crear la notificacion con receptor." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

    const notificacion_usuario = await Notificacion_Usuario.findOne({ where: { id } });

    if (notificacion_usuario) {
      return res.status(200).json(notificacion_usuario);
    } else {
      return res
        .status(404)
        .json({
          message: `No se encontraron notificaciones(con receptor) con ese id.`,
        });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteNotificacionUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Notificacion_Usuario.destroy({
      where: { id },
    });

    if (deleted) {
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
  createNotificacionUsuario,
  getNotificacionesUsuarios,
  deleteNotificacionUsuario,
  getNotificacionUsuarioById,
};
