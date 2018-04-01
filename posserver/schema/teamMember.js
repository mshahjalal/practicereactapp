export default `
  type TeamMember {
    id: Int!
    teamId: Int!
    userId: Int!
  }

    type Subscription {
        newTeamMember(teamId: Int!): TeamMember!
      }

  type AssignTeamMemberResponse {
    ok: Boolean!
    errors: [Error!]
  }

  type Query {
    allTeamMembers(teamId: Int!): [TeamMember!]!
  }

  type Mutation {
    assignTeamMember(teamId: Int!, userId: Int!): AssignTeamMemberResponse!
  }
`;

