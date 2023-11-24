const { ficha, usuarios } = require("../models");

/**--------------------------------
 * funcion para crear una ficha
 --------------------------------*/
const createFicha = async (req, res) => {
  try {
    const result = await ficha.create(req.body);
    if (result.dataValues.id !== 0) {
      return res.status(200).json(result);
    }
    return res.status(500).json({ message: "Error al crear un nuevo ficha." });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error al crear un nuevo ficha: ${error.message}` });
  }
};
/**-----------------------------------------
 * funcion para obtener todos los ficha
 -----------------------------------------*/
const getFicha = async (req, res) => {
  try {
    const result = await ficha.findAll({
      include: usuarios,
    });
    if (result.length !== 0) {
      return res.status(200).json(result);
    }
    return res.status(404).json({ message: "No hay ficha" });
  } catch (error) {
    res.status(500).json({
      message: `Error al obtener todos los ficha detalles: ${error.message}`,
    });
  }
};

/**-----------------------------------------
 * funcion para obtener un ficha por id
 -----------------------------------------*/
const fichabyId = async (req, res) => {
  try {
    const { id } = req.params;

    const fichaConsulta = await ficha.findOne({
      where: { id },
      include: [usuarios],
    });
    if (fichaConsulta) {
      return res.status(200).json(fichaConsulta);
    } else {
      return res.status(404).json({ message: `No se encontraron ficha.` });
    }
  } catch (error) {
    res.status(500).json({
      message: `Error al obtener un ficha detalles: ${error.message}`,
    });
  }
};
/**----------------------------------
 * funcion para actualizar un ficha
 ----------------------------------*/
const updateFicha = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await ficha.update(req.body, {
      where: { id },
    });
    if (updated) {
      const actualizado = await ficha.findOne({ where: { id } });
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
 * funciones para eliminar un ficha
 --------------------------------*/
const deleteFicha = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await ficha.destroy({
      where: { id },
    });
    if (deleted) {
      return res.json({ message: "ficha eliminado" });
    } else {
      return res
        .status(404)
        .json({ message: "No existe un usuario con este id." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// updateficha,
module.exports = {
  createFicha,
  getFicha,
  deleteFicha,
  updateFicha,
  fichabyId,
};
