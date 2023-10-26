const { Notificacion } = require("../models");

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

    const novedad = await Notificacion.findOne({ where: { id } });

    if (novedad) {
      return res.status(200).json(novedad);
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

module.exports = {
  getNotificaciones,
  deleteNotificacion,
  createNotificacion,
  getNotificacionById,
};
