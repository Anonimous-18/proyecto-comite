const fs = require("fs");
const path = require("path");
const { comites } = require("../models");

const getEvidencia = async (req, res) => {
  try {
    const { name } = req.params;

    if (!name) return res.status(400).json({ msg: "ERROR_GET_EVIDENCIA_PROP" });
    const { evidencia } = await comites.findOne({ where: { evidencia: name } });

    if (!evidencia) return res.status(500).json({ msg: "ERROR_GET_EVIDENCIA" });

    /**----------------------------------------------------------------------------------------------------
     * | "rutaArchivo": "C:\\laragon\\www\\proyecto-comite\\backend\\uploads\\file-1699618816551.pdf"
     * ----------------------------------------------------------------------------------------------------*/
    const rutaArchivo = path.join(__dirname, "../uploads", evidencia);

    fs.access(rutaArchivo, fs.constants.F_OK, (err) => {
      if (err) return res.status(404).json({ msg: "El archivo no existe" });

      const archivo = fs.createReadStream(rutaArchivo);

      res.setHeader("Content-Type", "application/octet-stream");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename=${evidencia.split("-").shift()}`
      );

      /**------------------------------------
       * | Enviamos el archivo en tipo blob
       * ------------------------------------*/
      archivo.pipe(res);
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = { getEvidencia };
