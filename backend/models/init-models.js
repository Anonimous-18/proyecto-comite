var DataTypes = require("sequelize").DataTypes;
var _aprendices_implicados = require("./aprendices_implicados");
var _articulos = require("./articulos");
var _capitulos = require("./capitulos");
var _comites = require("./comites");
var _comites_articulos = require("./comites_articulos");
var _fichas = require("./fichas");
var _normas_infligidas = require("./normas_infligidas");
var _paragrafos = require("./paragrafos");
var _permisos = require("./permisos");
var _roles = require("./roles");
var _roles_permisos = require("./roles_permisos");
var _sequelizemeta = require("./sequelizemeta");
var _sessions = require("./sessions");
var _users = require("./users");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var aprendices_implicados = _aprendices_implicados(sequelize, DataTypes);
  var articulos = _articulos(sequelize, DataTypes);
  var capitulos = _capitulos(sequelize, DataTypes);
  var comites = _comites(sequelize, DataTypes);
  var comites_articulos = _comites_articulos(sequelize, DataTypes);
  var fichas = _fichas(sequelize, DataTypes);
  var normas_infligidas = _normas_infligidas(sequelize, DataTypes);
  var paragrafos = _paragrafos(sequelize, DataTypes);
  var permisos = _permisos(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var roles_permisos = _roles_permisos(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);
  var sessions = _sessions(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  comites_articulos.belongsTo(articulos, { as: "articulo_fk_articulo", foreignKey: "articulo_fk"});
  articulos.hasMany(comites_articulos, { as: "comites_articulos", foreignKey: "articulo_fk"});
  normas_infligidas.belongsTo(articulos, { as: "art", foreignKey: "art_id"});
  articulos.hasMany(normas_infligidas, { as: "normas_infligidas", foreignKey: "art_id"});
  paragrafos.belongsTo(articulos, { as: "art", foreignKey: "art_id"});
  articulos.hasMany(paragrafos, { as: "paragrafos", foreignKey: "art_id"});
  articulos.belongsTo(capitulos, { as: "cap", foreignKey: "cap_id"});
  capitulos.hasMany(articulos, { as: "articulos", foreignKey: "cap_id"});
  comites_articulos.belongsTo(comites, { as: "comite_fk_comite", foreignKey: "comite_fk"});
  comites.hasMany(comites_articulos, { as: "comite_fk_comites_articulos", foreignKey: "comite_fk"});
  comites.belongsTo(comites_articulos, { as: "comites_articulo", foreignKey: "comites_articulos_id"});
  comites_articulos.hasMany(comites, { as: "comites", foreignKey: "comites_articulos_id"});
  roles_permisos.belongsTo(permisos, { as: "permiso", foreignKey: "permisos_id"});
  permisos.hasMany(roles_permisos, { as: "roles_permisos", foreignKey: "permisos_id"});
  roles_permisos.belongsTo(roles, { as: "rol", foreignKey: "rol_id"});
  roles.hasMany(roles_permisos, { as: "roles_permisos", foreignKey: "rol_id"});
  usuarios.belongsTo(roles, { as: "rol", foreignKey: "rol_id"});
  roles.hasMany(usuarios, { as: "usuarios", foreignKey: "rol_id"});
  aprendices_implicados.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id"});
  usuarios.hasMany(aprendices_implicados, { as: "aprendices_implicados", foreignKey: "usuario_id"});
  comites.belongsTo(usuarios, { as: "instructor_fk_usuario", foreignKey: "instructor_fk"});
  usuarios.hasMany(comites, { as: "comites", foreignKey: "instructor_fk"});
  fichas.belongsTo(usuarios, { as: "instructor", foreignKey: "instructor_id"});
  usuarios.hasMany(fichas, { as: "fichas", foreignKey: "instructor_id"});

  return {
    aprendices_implicados,
    articulos,
    capitulos,
    comites,
    comites_articulos,
    fichas,
    normas_infligidas,
    paragrafos,
    permisos,
    roles,
    roles_permisos,
    sequelizemeta,
    sessions,
    users,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
