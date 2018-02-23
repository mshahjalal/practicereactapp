export default (sequelize, DataTypes) => {
    const RolePermission = sequelize.define('role_permission', {
      role_id: {
        type: DataTypes.STRING
      },
      permission_id: {
        type: DataTypes.STRING
      }
    });
  
    RolePermission.associate = (models) => {
      
    };
  
    return RolePermission;
  };