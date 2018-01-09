export default `

 type Tenant {
    id: Int!
    name: String!
    subdomain: String!
  }

  type Query {
    allTenants: [Tenant!]!
    getTenant(tenantId: Int!): Tenant
  }

  type Mutation {
    createTenant(name: String!, subdomain: String!): Tenant!
  }

`;