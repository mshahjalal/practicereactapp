
const typeDefs = `
type User {
  id: Int
  firstName: String
  lastName: String
}

type Query {
  user(firstName: String, lastName: String): User
  allUsers: [User]
}
`;