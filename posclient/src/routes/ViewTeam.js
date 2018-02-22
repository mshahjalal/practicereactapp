import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const ViewTeam = ({ data: { allTeams = [] } }) => allTeams.map(u => <h1 key={u.id}>{u.name}</h1>);

const allTeamsQuery = gql`
  {
    allTeams {
      id
      name
    }
  }
`;

export default graphql(allTeamsQuery)(ViewTeam);