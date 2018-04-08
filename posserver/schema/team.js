export default `
  type Team {
    id: Int!
    name: String!    
    default: Boolean!
    type: String!
    permissions: [Permission!]!
    members: [User!]!
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