
/*const typeDefs = `
type User {
  id: Int
  firstName: String
  lastName: String
}

type Query {
  user(firstName: String, lastName: String): User
  allUsers: [User]
}
`;*/

export default `

 type User {
    id: Int
    username: String!
    email: String!
    password: String
  }

  type Query {
    getUser(id: Int!): User!
    allUsers: [User!]!
  }

  type Mutation {
    register(username: String!, email: String!, password: String!): User!
  }

`;