const { Router } = require("express");
// const { verifyToken } = require("../middlewares/session.meddleware.js")
const {
  createComites,
  getComites,
  updateComite,
  deleteComite,
  comitebyId,
} = require("../controllers/instructor.controller.js");

const router = Router();

router
  .post("/api/create-comites", createComites)

  .get("/api/get-comites", getComites)
  .get("/api/get-comites/:id", comitebyId)
  .put("/api/update-comites/:id", updateComite)
  .delete("/api/delete-comites/:id", deleteComite);

module.exports = router;
