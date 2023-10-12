const { roles, permisos, roles_permisos } = require("../models");

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
    if (
      nombre === "Instructor" ||
      nombre === "Aprendiz" ||
      nombre === "Administrador"
    ) {
      res.status(403).json({ message: "No es permitido hacer la accion" });
      return;
    }

    const [updated] = await roles.update(req.body, {
      where: { id },
    });
    if (updated) {
      const actualizado = await roles.findOne({ where: { id } });
      return res.status(200).json(actualizado);
    } else {
      return res.status(404).json({ message: "No existe un rol con este id." });
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
    if (
      nombre === "Instructor" ||
      nombre === "Aprendiz" ||
      nombre === "Administrador"
    ) {
      res.status(403).json({ message: "No es permitido hacer la accion" });
      return;
    }

    const deleted = await roles.destroy({
      where: { id },
    });
    if (deleted) {
      return res.json({ message: "rol eliminado" });
    } else {
      return res.status(404).json({ message: "No existe un rol con este id." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**--------------------------------
 * Controlador para crear un permiso
 --------------------------------*/
const createPermiso = async (req, res) => {
  try {
    const result = await permisos.create(req.body);

    if (result.dataValues.id !== 0) {
      return res.status(200).json(result);
    }
    return res
      .status(500)
      .json({ message: "Error al crear un nuevo permiso." });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error al crear un nuevo permiso: ${error.message}` });
  }
};

/**-----------------------------------------
 * Controlador para obtener todos los permisos
 -----------------------------------------*/
const getPermisos = async (req, res) => {
  try {
    const result = await permisos.findAll();

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
 * Controlador para obtener un permiso por id
 -----------------------------------------*/
const getPermisobyId = async (req, res) => {
  try {
    const { id } = req.params;

    const rol = await permisos.findOne({ where: { id } });

    if (rol) {
      return res.status(200).json(rol);
    } else {
      return res
        .status(404)
        .json({ message: `No se encontraron el permiso con ese id.` });
    }
  } catch (error) {
    res.status(500).json({
      message: `Error al obtener un permiso detalles: ${error.message}`,
    });
  }
};

/**----------------------------------
 * Controlador para actualizar un permiso
 ----------------------------------*/
const updatePermiso = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await permisos.update(req.body, {
      where: { id },
    });
    if (updated) {
      const actualizado = await permisos.findOne({ where: { id } });
      return res.status(200).json(actualizado);
    } else {
      return res
        .status(404)
        .json({ message: "No existe un permiso con este id." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**--------------------------------
 * Controlador para delete un rol
 --------------------------------*/
const deletePermiso = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await permisos.destroy({
      where: { id },
    });
    if (deleted) {
      return res.json({ message: "permiso eliminado" });
    } else {
      return res
        .status(404)
        .json({ message: "No existe un permiso con este id." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**--------------------------------
 * Controlador para crear un permiso
 --------------------------------*/
const asignarPermiso = async (req, res) => {
  try {
    const { permisosNombres, rol } = req.body;
    const rolId = (await roles.findOne({ where: { nombre: rol } })).id;
    // Crear un array de promesas para todas las consultas asincrónicas
    const promesas = permisosNombres.map(async (permiso) => {
      const permisoId = (await permisos.findOne({ where: { nombre: permiso } }))
        .id;
      const result = await roles_permisos.create({
        rol_id: rolId,
        permisos_id: permisoId,
      });
      return result; // Devolver el resultado de cada consulta
    });

    // Esperar a que todas las promesas se resuelvan
    const resultados = await Promise.all(promesas);

    // Ahora resultados es un array que contiene todos los resultados de las consultas
    resultados.forEach((result) => {
      console.log(result);
    });

    if (resultados) {
      return res.status(200).json(resultados);
    }
    return res
      .status(500)
      .json({ message: "Error al asiganar los permisos al rol" });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error al asiganar los permisos al rol: ${error.message}` });
  }
};

module.exports = {
  createRol,
  getRol,
  updateRol,
  deleteRol,
  getRolbyId,

  createPermiso,
  getPermisos,
  getPermisobyId,
  updatePermiso,
  deletePermiso,

  asignarPermiso,
};
