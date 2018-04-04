export default `
  type Member {
    id: Int!
    teamId: Int!
    userId: Int!
    user: [User]
  }

  type Subscription {
    newTeamMember(teamId: Int!): Member!
  }

  type AssignTeamMemberResponse {
    ok: Boolean!
    errors: [Error!]
  }

  type Query {
    allTeamMembers(teamId: Int!): [Member!]!
  }

  type Mutation {
    assignTeamMember(teamId: Int!, userId: Int!): AssignTeamMemberResponse!
  }
`;

