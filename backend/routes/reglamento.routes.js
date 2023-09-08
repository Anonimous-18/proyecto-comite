const { Router } = require("express");
const { getReglamento } = require("../controllers/reglamento.controller.js");
const { verifyToken } = require("../middlewares/session.meddleware.js");
// const { paragrafos } = require("../models");

const router = Router();

router.get("/api/reglamento", verifyToken, getReglamento);

// router.get("/api/prueba", async (req,res) =>{
//     const project = await paragrafos.findAll();
//     if (project) {
//     res.json(project);
//     } else {
//     console.log(project instanceof Project); // true
//     console.log(project.title); // 'My Title'
//     }
// });

module.exports = router;