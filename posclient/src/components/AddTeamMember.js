import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import AssignMember from '../components/AssignMember';


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

const AddTeamMember = ({ data: { allUsers }, currentTeamId }) => {
    console.log("currentTeamId: ", currentTeamId);
    const allUsersList = allUsers ? [...allUsers] : [];

    return (
        <div>
            <AssignMember key="team-assign" members={allUsersList.map(u =>({
                id: u.id,
                email: u.email
            }))
            } />

            <h2>Show user list</h2>
            {allUsersList.map(u => <p key={u.id}>{u.email} </p>)}
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