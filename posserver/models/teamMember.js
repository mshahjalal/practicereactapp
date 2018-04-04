export default (sequelize, DataTypes) => {
    const Member = sequelize.define('member', {
      teamId: {
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER
      }
    });
  
    Member.associate = (models) => {
        Member.belongsToMany(models.Team, {
            through: models.Member,
            foreignKey: {
            name: 'teamId',
            field: 'team_id',
            },
        });
        Member.belongsToMany(models.User, {
          through: models.Member,
          foreignKey: {
            name: 'userId',
            field: 'user_id',
          },
        });
    };
  
    return Member;
  };
  