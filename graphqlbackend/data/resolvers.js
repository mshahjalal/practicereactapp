import { Author } from './connectors';

const resolvers = {
  Query: {
    tenant(_, args){
      return Tenant.find({ where: args });
    },
    allTenants(){
      return Tenant.findAll();
    },
    author(_, args) {
      return Author.find({ where: args });
    },
    allAuthors() {
      return Author.findAll();
    }
  },
  Tenant: {
    authors(tenant){
      return tenant.getAuthors();
    }
  },
  Author: {
    posts(author) {
      return author.getPosts();
    }
  },
  Post: {
    author(post) {
      return post.getAuthor();
    }
  }
};

export default resolvers;