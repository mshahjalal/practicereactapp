
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
    id: Int!
    username: String!
    email: String!
  }

  type Query {
    allUsers: [User!]!
    getUser(userId: Int!): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
  }

`;