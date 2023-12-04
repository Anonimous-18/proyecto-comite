const fs = require("fs");
const path = require("path");
const { comites } = require("../models");

const envioDocumentos = async (req, res) => {
  console.log(req.app.userData);
  try {
    const { idDesdeClie, rutOpcion } = req.params;
    //citacionesCreadas
    //reuniones

    if (!rutOpcion || !idDesdeClie)
      return res.status(400).json({ msg: "parametros no validos " });
    if (rutOpcion !== "reuniones")
      if (rutOpcion !== "citacionesCreadas")
        return res.status(400).json({ msg: "parametros no validos " });
    console.log(rutOpcion);

    const { id } = await comites.findOne({ where: { id: idDesdeClie } });
    const { estado } = await comites.findOne({ where: { id: idDesdeClie } });

    if (!id)
      return res
        .status(500)
        .json({ msg: "Error en servidor, no hay comite con ese id" });

    let archivo = null;
    const ext = ".docx";
    if (rutOpcion === "citacionesCreadas") {
      archivo = `citacion-${id}${ext}`;
    } else {
      if (estado !== "ejecucion")
        if (estado !== "finalizado")
          return res.status(400).json({ msg: "Este comite no contiene acta" });

      archivo = `actaBorrador-${id}${ext}`;
    }
    /**----------------------------------------------------------------------------------------------------
     * | "rutaArchivo": "C:\\laragon\\www\\proyecto-comite\\backend\\uploads\\file-1699618816551.pdf"
     * ----------------------------------------------------------------------------------------------------*/
    const rutaArchivo = path.join(__dirname, `../documentos_comite/${rutOpcion}`, archivo);

    fs.access(rutaArchivo, fs.constants.F_OK, (err) => {
        if (err) return res.status(404).json({ msg: 'El archivo no existe' });

        const archivo = fs.createReadStream(rutaArchivo);

        res.setHeader('Content-Type', 'application/octet-stream');
        res.setHeader('Content-Disposition', `attachment; filename=${archivo}`);

        /**------------------------------------
         * | Enviamos el archivo en tipo blob
         * ------------------------------------*/
        archivo.pipe(res);
    })
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { envioDocumentos };
