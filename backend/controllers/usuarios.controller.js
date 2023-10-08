const { usuarios } = require("../models");

const getUserById = async (req, res) => {
  try {
    const { id } = req.body;
    const usuario = await usuarios.findByPk(id);

    if (usuario) {
      return res
        .status(200)
        .json(usuario.dataValues);
    }
    return res.status(404).json({ message: `No se encontro el usuario` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getUserById };
