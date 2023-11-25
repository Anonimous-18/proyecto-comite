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
      console.log(comites_fk)
      
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

      const unirDatos = () => {
        const comites = infoComites.map((comite) => {
          let resultado = [];

          instructorSolicitante.find((inst) => {
            if (inst.id === comite.dataValues.instructor_fk) {
              resultado.push({
                ...comite.dataValues,
                instructor: inst.nombre_completo,
                emailInstructor: inst.email,
                dependenciaInstructor: inst.dependencia,
              });
              return;
            }
          });

          return resultado[0];
        });

        const novedades = infoNovedades.map((novedad) => {
          let resultado = [];

          instructorNovedad.find((inst) => {
            if (inst.id === novedad.dataValues.instructor_fk) {
              resultado.push({
                ...novedad.dataValues,
                instructor: inst.nombre_completo,
                emailInstructor: inst.email,
                dependenciaInstructor: inst.dependencia,
              });
              return;
            }
          });

          return resultado[0];
        });

        return { aprendiz: aprendiz.dataValues, comites, novedades };
      };

      return res.status(200).json(unirDatos());
    } else {
      return res.status(404).json({ message: `Aprendiz no encontrado.` });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getUserById, getAprendices, getAntecedenteForAprendiz };
