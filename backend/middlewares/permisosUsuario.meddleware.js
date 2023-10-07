
const permisosUsuario =(req,res,next)=>{
  const userData = req.userData

  const rol = userData.user.rol_id;
  console.log(rol);
  next();
}

module.exports = {
  permisosUsuario
}