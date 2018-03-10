export default `
  type Team {
    id: Int!
    name: String!    
    members: [User!]!
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