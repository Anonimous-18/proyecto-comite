const { createPool } = require("mysql2/promise");
const {
  DB_HOST,
  DB_DATABASE,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} = require("../config.js");

const pool = createPool({
    host: `${DB_HOST}`,
    database: `${DB_DATABASE}`,
    password: `${DB_PASSWORD}`,
    port: `${DB_PORT}`,
    user: `${DB_USER}`,
});

module.exports = pool;