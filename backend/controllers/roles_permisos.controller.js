const { ficha, permisos, roles_permisos } = require("../models");

/**--------------------------------------------------------
 * funcion para obtener todos los permisos de un cierto rol
 -----------------------------------------*/
const getPermisosRol = async (req, res) => {
  try {
    const PermisosRol = await roles_permisos.findAll({
      where: { rol_id: req.params.id},
      include: [
        {
          model: permisos,
          as: "permisos",
        },
      ],
    });
    const result = PermisosRol.map( permiso => permiso.permisos.nombre )
    if (result.length === 0) {
      return res.status(404).json({ message: "No hay permisos" });
    }
    return res.status(200).json(result);

  } catch (error) {
    res.status(500).json({
      message: `Error al obtener todos los permisos detalles: ${error.message}`,
    });
  }
};
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
 * funcion para obtener un ficha por id
 -----------------------------------------*/
const fichabyId = async (req, res) => {
  try {
    const { id } = req.params;

    const fichaConsulta = await ficha.findOne({ where: { id } });
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
    } 
      
    return res
        .status(404)
        .json({ message: "No existe un ficha con este id." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**--------------------------------
 * funciones para eliminar un permiso
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
        .json({ message: "No existe un permiso con este id." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// updateficha,
module.exports = {
  createFicha,
  getPermisosRol,
  deleteFicha,
  updateFicha,
  fichabyId,
};
