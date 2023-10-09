const { usuarios, roles } = require("../models");

const getUserById = async (req, res) => {
  try {
    const { id } = req.body;
    const usuario = await usuarios.findByPk(id);

    if (usuario) {
      return res.status(200).json(usuario.dataValues);
    }
    return res.status(404).json({ message: `No se encontro el usuario` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAprendices = async (req, res) => {
  try {
    const allUsers = await usuarios.findAll();

    if (allUsers) {
      let aprendices = []
      allUsers.forEach(async (user) => {
        console.log(user.dataValues.rol_id)
        const id = user.dataValues.rol_id
        const rol = await roles.findOne({ where: { id } }); 
        aprendices.push(rol.dataValues)
        console.log(aprendices.length)
      });
      console.log(aprendices)
      return res.status(200).json(allUsers);
    }
    return res.status(404).json({ message: `No se encontraron usuarios` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getUserById, getAprendices };
