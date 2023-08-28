const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// Procesamientos:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => console.log("SERVER 5000"));
