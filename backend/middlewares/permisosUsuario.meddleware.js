const middlewareFuncion = (req, res, next) => {
  try {
    // Accede al parámetro específico que se configuró
    const accionControlador = req.accionControlador;
    const permisos = req.userData.user.permisos;
    const permiso = permisos.find((permiso) => permiso === accionControlador);

    if (!permiso) {
      return res.status(403).json({
        message: `No se tiene el permiso para poder ejecutar esta accion`,
      });
    }
    
    //console.log(permiso);
    next();
  } catch (error) {
    throw error;
  }
};

// Función que envuelve el middleware con el parámetro
const comprobarPermiso = (accionControlador) => {
  return (req, res, next) => {
    req.accionControlador = accionControlador;
    middlewareFuncion(req, res, next);
  };
};
module.exports = {
  comprobarPermiso,
};
