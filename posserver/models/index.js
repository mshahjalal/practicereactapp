import Sequelize from 'sequelize';

const sequelize = new Sequelize('mypos', null, null, {
  dialect: 'sqlite',
  define: {
    underscored: true,
  },
  operatorsAliases: Sequelize.Op,
  storage: './mypos.sqlite'
});

const models = {
  User: sequelize.import('./user')
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
