import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import AppLayout from '../components/AppLayout';


const ViewTeam = ({ data: { allTeams } }) =>{

  const teamList = allTeams ? [...allTeams] : [];

  return (
      <div>
          <AppLayout />
          <div className="container">
              <h2>Show team list</h2>
              <div className="container-fluid">
                {teamList.map(u => 
                    <div className="row" key={u.id}>
                      <div className="col-sm-8">{u.name}</div>
                      <div className="col-sm-4">
                        <Link key={`assign-team-member-${u.id}`} to={`/assign-team-member/${u.id}`}>Assign team member</Link>
                      </div>
                    </div>
                )}
              </div>
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