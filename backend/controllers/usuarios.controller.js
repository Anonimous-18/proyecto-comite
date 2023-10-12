const {
  usuarios,
  roles,
  comites,
  aprendices_implicados,
  Novedad,
} = require("../models");

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

const getAntecedenteForAprendiz = async (req, res) => {
  try {
    const { id } = req.body;

    const aprendiz = await usuarios.findByPk(id);

    if (aprendiz) {
      const documento = aprendiz.dataValues.documento;

      /**------------------------------------------------
       * | Informacion de Comites para un aprendiz
       * ------------------------------------------------*/
      const comites_fk = await aprendices_implicados.findAll({
        where: { documento },
      });

      const comitesIds = comites_fk.map(
        (comite_fk) => comite_fk.dataValues.comite_fk
      );

      const infoComites = await comites.findAll({
        where: { id: comitesIds },
      });

      const instructorSolicitantePromises = infoComites.map(async (comite) => {
        const instructor = await usuarios.findByPk(
          comite.dataValues.instructor_fk
        );
        return instructor.dataValues;
      });

      const instructorSolicitante = await Promise.all(
        instructorSolicitantePromises
      );

      /**------------------------------------------------
       * | Informacion de Novedades para un aprendiz
       * ------------------------------------------------*/
      const infoNovedades = await Novedad.findAll({
        where: { aprendiz_fk: id },
      });

      const instructorNovedadPromises = infoNovedades.map(async (novedad) => {
        const instructor = await usuarios.findByPk(
          novedad.dataValues.instructor_fk
        );
        return instructor.dataValues;
      });

      const instructorNovedad = await Promise.all(instructorNovedadPromises);

      /**----------
       * | Salida
       * ----------*/
      return res.status(200).json({
        aprendiz: aprendiz.dataValues,
        comites: infoComites.map((comite) => comite.dataValues),
        instructorSolicitante: instructorSolicitante,
        novedades: infoNovedades,
        instructorSolicitanteNovedad: instructorNovedad,
      });
    } else {
      return res.status(404).json({ message: `Aprendiz no encontrado.` });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getUserById, getAprendices, getAntecedenteForAprendiz };
