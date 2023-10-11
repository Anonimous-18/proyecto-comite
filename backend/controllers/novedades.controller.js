const { Novedad: novedads } = require("../models");

const createNovedad = async (req, res) => {
  try {
    const result = await novedads.create(req.body);

    if (result.dataValues.id !== 0) {
      return res.sendStatus(204);
    }
    return res.status(500).json({ message: "Error al crear la novedad." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNovedades = async (req, res) => {
  try {
    const result = await novedads.findAll();

    if (result.length !== 0) {
      return res.status(200).json(result);
    }
    return res.status(404).json({ message: "No hay novedades." });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getNovedadById = async (req, res) => {
  try {
    const { id } = req.params;

    const novedad = await novedads.findOne({ where: { id } });

    if (novedad) {
      return res.status(200).json(novedad);
    } else {
      return res
        .status(404)
        .json({ message: `No se encontraron novedades con ese id.` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateNovedad = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await novedads.update(req.body, {
      where: { id },
    });

    if (updated) {
      const actualizado = await novedads.findOne({ where: { id } });
      return res.status(200).json(actualizado);
    } else {
      return res
        .status(404)
        .json({ message: "No existe la novedadd con ese id" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteNovedad = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await novedads.destroy({
      where: { id },
    });

    if (deleted) {
      return res.json({ message: "Novedad eliminada." });
    } else {
      return res
        .status(404)
        .json({ message: "No existe una novedad con ese id." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createNovedad,
  getNovedadById,
  getNovedades,
  updateNovedad,
  deleteNovedad,
};
