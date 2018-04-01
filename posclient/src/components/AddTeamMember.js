import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


import AssignMember from '../components/AssignMember';
import TeamMembers from '../components/ViewTeamMember';


//import Teams from '../components/Teams';
// return [
//     <Teams
//       key="team-sidebar"
//       teams={allTeams.map(t => ({
//         id: t.id,
//         letter: t.name.charAt(0).toUpperCase(),
//       }))}
//     />
//   ];

const AddTeamMember = ({ data: { loading, allUsers }, currentTeamId }) => {
        
    if(loading) return false;

    const allUsersList = allUsers ? [...allUsers] : [];
    

    return (
        <div>
            <AssignMember key="team-assign" currentTeamId={currentTeamId} members={allUsersList.map(u =>({
                id: u.id,
                email: u.email
            }))
            } />

            <TeamMembers teamId={currentTeamId} />

            {/* <h2>Show team member list</h2>
            {allUsersList.map(u => <p key={u.id}>{u.email} </p>)} */}
        </div>
    );
}

const allUsersQuery = gql`
  {
    allUsers {
      id
      email
    }
  }
`;

export default graphql(allUsersQuery)(AddTeamMember);