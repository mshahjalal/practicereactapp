export default `
  type Permission {
    id: Int!
    name: String!
    description: String!
    active: Boolean!
    teamPermissions: [Team!]!
  }

  type Subscription {
    newPermission: Permission!
  }

  type CreatePermissionResponse {
    ok: Boolean!
    errors: [Error!]
  }

  type Query {
    allPermissions: [Permission!]!
  }

  type Mutation {
    createPermission(name: String!): CreatePermissionResponse!
  }
`;