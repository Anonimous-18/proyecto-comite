const pool = require("../database/db.js");

/**------------------------------------------
 * | Controlador que obtiene el reglamento
 ------------------------------------------*/
const getReglamento = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT capitulos.cap_id, capitulos.cap_titulo, articulos.art_id, articulos.art_titulo, articulos.art_descripcion, paragrafos.par_id, paragrafos.par_descripcion FROM capitulos INNER JOIN articulos ON capitulos.cap_id = articulos.cap_id LEFT JOIN paragrafos ON articulos.art_id = paragrafos.art_id"
    );
    if (result.length !== 0) {
      return res.status(200).json(result);
    }
    return res.status(404).json({ message: "El reglamento no existe." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getReglamento,
};
