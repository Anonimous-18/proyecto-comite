var DataTypes = require("sequelize").DataTypes;
var _articulos = require("./articulos");
var _capitulos = require("./capitulos");
var _normas_infligidas = require("./normas_infligidas");
var _paragrafos = require("./paragrafos");
var _permisos = require("./permisos");
var _roles = require("./roles");
var _roles_permisos = require("./roles_permisos");
var _sequelizemeta = require("./sequelizemeta");
var _sessions = require("./sessions");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var articulos = _articulos(sequelize, DataTypes);
  var capitulos = _capitulos(sequelize, DataTypes);
  var normas_infligidas = _normas_infligidas(sequelize, DataTypes);
  var paragrafos = _paragrafos(sequelize, DataTypes);
  var permisos = _permisos(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var roles_permisos = _roles_permisos(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);
  var sessions = _sessions(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  normas_infligidas.belongsTo(articulos, { as: "art", foreignKey: "art_id"});
  articulos.hasMany(normas_infligidas, { as: "normas_infligidas", foreignKey: "art_id"});
  paragrafos.belongsTo(articulos, { as: "art", foreignKey: "art_id"});
  articulos.hasMany(paragrafos, { as: "paragrafos", foreignKey: "art_id"});
  articulos.belongsTo(capitulos, { as: "cap", foreignKey: "cap_id"});
  capitulos.hasMany(articulos, { as: "articulos", foreignKey: "cap_id"});
  usuarios.belongsTo(roles, { as: "rol", foreignKey: "rol_id"});
  roles.hasMany(usuarios, { as: "usuarios", foreignKey: "rol_id"});

  return {
    articulos,
    capitulos,
    normas_infligidas,
    paragrafos,
    permisos,
    roles,
    roles_permisos,
    sequelizemeta,
    sessions,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
