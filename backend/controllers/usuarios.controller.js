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
      /**----------------------------------------------------------------
       * | Esperamos que todas las promesas terminen antes de continuar
       * ----------------------------------------------------------------*/
      const aprendices = await Promise.all(
        allUsers.map(async (user) => {
          const id = user.dataValues.rol_id;
          const rol = await roles.findOne({ where: { id } });

          /**---------------------------------
           * | Filtramos solo los aprendices
           * ---------------------------------*/
          if (rol && rol.nombre === "Aprendiz") {
            return user.dataValues;
          }
        })
      );

      const response = aprendices.filter(
        (aprendiz) => aprendiz !== undefined && aprendiz !== null
      );

      if (response && response.length !== 0) {
        return res.status(200).json(response);
      } else {
        return res.status(404).json({ message: `No hay aprendices.` });
      }
    }
    return res.status(404).json({ message: `No se encontraron usuarios` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getUserById, getAprendices };
