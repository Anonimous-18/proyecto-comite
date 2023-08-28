const express = require("express");
const session = require("express-session");
const { v4 } = require("uuid");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(
  session({
    secret: v4(),
    resave: false,
    saveUninitialized: true,
  })
);

// Procesamientos:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => console.log("SERVER 5000"));
