const { comites } = require("../models");

const getEvidencia = async (req, res) => {
    try {
        const { nombreArchivo } = req.body;

        if (!nombreArchivo) return res.status(400).json({ msg: "ERROR_GET_EVIDENCIA" })
        const { data } = await comites.findOne({ where: { evidencia: nombreArchivo } })

        if (!data) return res.status(500).json({ msg: "ERROR_GET_EVIDENCIA" });
        else return res.status(200).json({ data });

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}