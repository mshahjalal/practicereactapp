export default `
  type Permission {
    id: Int!
    name: String!
    description: String!
    active: Boolean!
    teamPermissions: [Team!]!
  }

  type Subscription {
    newPermission(name: String!): Permission!
  }

  type CreatePermissionResponse {
    ok: Boolean!
    errors: [Error!]
  }

  type Query {
    allPermissions(name: String!): [Permission!]!
  }

  type Mutation {
    createPermission(name: String!): CreatePermissionResponse!
  }
`;