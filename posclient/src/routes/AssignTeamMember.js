import React from 'react';
import AddTeamMember from '../components/AddTeamMember';
import AppLayout from '../components/AppLayout';

const AssignTeamMember = ({ match: { params } }) => {

    return (
        <div>
            <AppLayout />   

            <div className="container">
            <AddTeamMember currentTeamId={params.teamId} />            
            {/* <Permissions name='NEW_PERMISSION'/>    */}
            </div>                         
        </div>
    );
}

export default AssignTeamMember;