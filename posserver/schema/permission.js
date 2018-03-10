export default `
  type Permission {
    id: Int!
    name: String!
    description: String!
    active: Boolean!
    teamPermissions: [Team!]!
  }

  type CreatePermissionResponse {
    ok: Boolean!
    errors: [Error!]
  }

  type Query {
    allPermissions: [Team!]!
  }

  type Mutation {
    createPermission(name: String!): CreatePermissionResponse!
  }
`;