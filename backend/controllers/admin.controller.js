const { roles } = require("../models");

/**--------------------------------
 * Controlador para crear un rol
 --------------------------------*/
const createRol = async (req, res) => {
  try {
    const result = await roles.create(req.body);

    if (result.dataValues.id !== 0) {
      return res.status(200).json(result);
    }
    return res.status(500).json({ message: "Error al crear un nuevo rol." });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error al crear un nuevo rol: ${error.message}` });
  }
};

/**-----------------------------------------
 * Controlador para obtener todos los roles
 -----------------------------------------*/
const getRol = async (req, res) => {
  try {
    const result = await roles.findAll();

    if (result.length !== 0) {
      return res.status(200).json(result);
    }
    return res.status(404).json({ message: "No hay roles" });
  } catch (error) {
    res.status(500).json({
      message: `Error al obtener todos los roles detalles: ${error.message}`,
    });
  }
};

/**-----------------------------------------
 * Controlador para obtener un rol por id
 -----------------------------------------*/
const getRolbyId = async (req, res) => {
  try {
    const { id } = req.params;

    const rol = await roles.findOne({ where: { id } });

    if (rol) {
      return res.status(200).json(rol);
    } else {
      return res
        .status(404)
        .json({ message: `No se encontraron roles con ese id.` });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error al obtener un rol detalles: ${error.message}` });
  }
};

/**----------------------------------
 * Controlador para actualizar un rol
 ----------------------------------*/
const updateRol = async (req, res) => {
  const { id } = req.params;
  try {
    const nombre = (await roles.findOne({ where: { id } })).nombre;
    if (nombre === 'Instructor' || nombre === 'Aprendiz' || nombre === 'Administrador') { 
      res.status(403).json({ message: 'No tienes permisos para realizar esta acción.' });
      return;
    } 

    const [updated] = await roles.update(req.body, {
      where: { id },
    });
    if (updated) {
      const actualizado = await roles.findOne({ where: { id } });
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
 * Controlador para delete un rol
 --------------------------------*/
const deleteRol = async (req, res) => {
  const { id } = req.params;
  try {
    const nombre = (await roles.findOne({ where: { id } })).nombre;
    if (nombre === 'Instructor' || nombre === 'Aprendiz' || nombre === 'Administrador') { 
      res.status(403).json({ message: 'No tienes permisos para realizar esta acción.' });
      return;
    } 


    const deleted = await roles.destroy({
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

module.exports = {
  createRol,
  getRol,
  updateRol,
  deleteRol,
  getRolbyId,
};
