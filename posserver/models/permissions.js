export default (sequelize, DataTypes) => {
    const Permissions = sequelize.define('permissions', {
      permission: {
        type: DataTypes.STRING,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT
      },
      default: {
        type: DataTypes.BOOLEAN
      },
      active: {
        type: DataTypes.BOOLEAN
      }
    });
  
    Permissions.associate = (models) => {
      
    };
  
    return Permissions;
  };