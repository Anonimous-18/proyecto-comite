const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const roles = sequelize.define('roles', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    creado: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'roles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  //relacion de muchos a muchos se coloca solamente en uno de los modelos sequelize ya se encarga de hacer el resto
  roles.belongsToMany(sequelize.models.permisos, {
    through: 'roles_permisos', // Nombre de la tabla intermedia
    foreignKey: 'rol_id', // Clave externa en roles_permisos que hace referencia a roles
    otherKey: 'permisos_id', // Clave externa en roles_permisos que hace referencia a permisos
  });
  return roles;
};

