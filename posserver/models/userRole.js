export default (sequelize, DataTypes) => {
    const UserRole = sequelize.define('user_role', {
      user_id: {
        type: DataTypes.STRING
      },
      role_id: {
        type: DataTypes.STRING
      },
    });
  
    UserRole.associate = (models) => {
      
    };
  
    return UserRole;
  };