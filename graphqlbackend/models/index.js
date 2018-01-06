import Sequelize from 'sequelize';

const sequelize = new Sequelize('mypos2', null, null, {
  dialect: 'sqlite',
  operatorsAliases: Sequelize.Op,
  storage: './myshop.sqlite'
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