export default (sequelize, DataTypes) => {
    const TeamMember = sequelize.define('teamMember', {
      teamId: {
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER
      }
    });
  
    TeamMember.associate = (models) => {
        // TeamMember.belongsToMany(models.Team, {
        //     through: 'teamPermission',
        //     foreignKey: {
        //     name: 'permissionId',
        //     field: 'permission_id',
        //     },
        // });
    };
  
    return TeamMember;
  };
  