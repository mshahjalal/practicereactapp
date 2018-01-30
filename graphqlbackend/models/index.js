import Sequelize from 'sequelize';

const db = new Sequelize('mypos2', null, null, {
  dialect: 'sqlite',
  operatorsAliases: Sequelize.Op,
  storage: './myshop2.sqlite'
});

const models = {
  User: db.import('./user.js'),
  Tenant: db.import('./tenant.js'),
  Branch: db.import('./branch.js'),
  Tax: db.import('./tax.js')
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = db;
models.Sequelize = Sequelize;

export default models;