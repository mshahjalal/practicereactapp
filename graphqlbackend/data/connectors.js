import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

const db = new Sequelize('mypos', null, null, {
  dialect: 'sqlite',
  storage: './myshop.sqlite'
});

const TenantModel = db.define('tenant', {
  name: { type: Sequelize.STRING },
  subdomain: { type: Sequelize.STRING }
});

const AuthorModel = db.define('author', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING }
});

const PostModel = db.define('post', {
  title: { type: Sequelize.STRING },
  text: { type: Sequelize.STRING }
});

TenantModel.hasMany(AuthorModel);
AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);

casual.seed(123);
db.sync({ force: true }).then(() => {
  _.times(10, () => {

    return TenantModel.create({
      name: casual.name,
      subdomain: casual.name
    }).then(tenant => {
        return tenant.createAuthor({
          firstName: casual.first_name,
          lastName: casual.last_name
        }).then(author => {
          return author.createPost({
            title: `A post by ${author.first_name}`,
            text: casual.sentences(3)
          });
        });
    });

  });
});

const Tenant = db.models.tenant;
const Author = db.models.author;
const Post = db.models.post;

export { Tenant, Author, Post };