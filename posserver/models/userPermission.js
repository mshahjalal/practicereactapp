export default (sequelize, DataTypes) => {
    const RolePermission = sequelize.define('role_permission', {
      user_id: {
        type: DataTypes.STRING
      },
      role_id: {
        type: DataTypes.STRING
      },
    });
  
    RolePermission.associate = (models) => {
      
    };
  
    return RolePermission;
  };