export default (sequelize, DataTypes) => {
    const Permission = sequelize.define('permission', {
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT
      },
      active: {
        type: DataTypes.BOOLEAN
      },
    });
  
    Permission.associate = (models) => {
        Permission.belongsToMany(models.Team, {
        through: 'teamPermission',
        foreignKey: {
          name: 'permissionId',
          field: 'permission_id',
        },
      });
    };
  
    return Permission;
  };
  