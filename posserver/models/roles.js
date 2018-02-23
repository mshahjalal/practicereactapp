export default (sequelize, DataTypes) => {
    const Roles = sequelize.define('roles', {
      role: {
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
  
    Roles.associate = (models) => {
      
    };
  
    return Roles;
  };