export default `
  type Roles {
    id: Int!
    role: String!
    description: String!
    default: String!
    active: String!
  }

  type CreateRoleResponse {
    ok: Boolean!
    errors: [Error!]
  }

  type Query {
    allRoles: [Role!]!
  }

  type Mutation {
    createRole(role: String!): CreateRoleResponse!
  }
`;
