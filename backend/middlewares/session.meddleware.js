const checkAdmin = (req, res, next) => {
  // OSEA QUE ES UN ADMINISTRADOR:
  console.log(req.session.user)
  if (req.session.user && req.session.user.rol_id === 1) {
    next();
  } else {
    res.status(403).send("<h1>Acceso no autorizado</h1>");
  }
};

module.exports = { checkAdmin };
