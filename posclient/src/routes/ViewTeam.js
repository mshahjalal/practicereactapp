import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import AppLayout from '../components/AppLayout';


const ViewTeam = ({ data: { allTeams } }) =>{

  const teamList = allTeams ? [...allTeams] : [];

  return (
      <div>
          <AppLayout />
          <div className="container">
              <h2>Show team list</h2>
            {teamList.map(u => <p key={u.id}>{u.name}</p>)}
          </div>
      </div>
    
  );
} 

const allTeamsQuery = gql`
  {
    allTeams {
      id
      name
    }
  }
`;

export default graphql(allTeamsQuery)(ViewTeam);