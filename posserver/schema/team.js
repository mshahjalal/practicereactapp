export default `
  type Team {
    id: Int!
    name: String!    
    default: Boolean!
    type: String!
    permissions: [Permission!]!
  }

  type CreateTeamResponse {
    ok: Boolean!
    errors: [Error!]
  }

  type Query {
    allTeams: [Team!]!
  }

  type Mutation {
    createTeam(name: String!): CreateTeamResponse!
  }
`;

/*owner: User!*/