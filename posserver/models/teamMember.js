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
        TeamMember.belongsToMany(models.Team, {
            through: 'MemberOfTeam',
            foreignKey: {
            name: 'teamId',
            field: 'team_id',
            },
        });
        TeamMember.belongsToMany(models.User, {
          through: 'UserTeamMember',
          foreignKey: {
            name: 'userId',
            field: 'user_id',
          },
        });
    };
  
    return TeamMember;
  };
  