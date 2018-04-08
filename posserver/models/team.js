export default (sequelize, DataTypes) => {
  const Team = sequelize.define('team', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    default: {
      type: DataTypes.BOOLEAN
    },
    type: {
      type: DataTypes.ENUM,
      values: ['custom', 'user', 'manager', 'admin']
    }
  });

  Team.associate = (models) => {    

    Team.belongsToMany(models.User, {
      through: models.Member,
      foreignKey: {
        name: 'teamId',
        field: 'team_id',
      },
    });
    // Team.belongsToMany(models.Permission, {
    //   through: 'teamPermission',
    //   foreignKey: {
    //     name: 'teamId',
    //     field: 'team_id',
    //   },
    // });
    
  };

  return Team;
};
