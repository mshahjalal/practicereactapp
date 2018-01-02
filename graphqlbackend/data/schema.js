import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
// import mocks from './mocks';
import resolvers from './resolvers';

const typeDefs = `
type Tenant {
  id: Int
  name: String,
  subdomain: String
  authors: [Author]
  branches: [Branch]
}
type Branch {
  id: Int
  name: String
  tenant: Tenant
}
type CashRegister {
  id: Int
  name: String
}
type PaymentType {
  id: Int
  name: String
}
type Author {
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}
type Post {
  id: Int
  title: String
  text: String
  author: Author
}
type Query {
  tenant(name: String, subdomain: String) : Tenant
  allTenants: [Tenant]
  branch(name: String): Branch
  allBranches: [Branch]
  author(firstName: String, lastName: String): Author
  allAuthors: [Author]
}
type Mutation {
  createAuthor(firstName: String, lastName: String) : Author
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export default schema;