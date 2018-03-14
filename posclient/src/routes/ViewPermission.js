import React from 'react';
// import { graphql } from 'react-apollo';
// import gql from 'graphql-tag';
import Permissions from '../components/Permissions';
import CreatePermission from './CreatePermission';


// const ViewPermission = () => {
//     return (
//         <div>
//             <CreatePermission />            
//             <Permissions name='NEW_PERMISSION'/>            
//         </div>
//     );
// }

// export default ViewPermission;



const ViewPermission = (
    // { 
    // data: { loading, allPermissions } 
    // }
) => {

    // if (loading) {
    //     return null;
    // }

    //const permissions = [...allPermissions];

    return (
        <div>
            <CreatePermission name='NEW_PERMISSION'/>
            
            <Permissions name='NEW_PERMISSION' />
            
        </div>
    );

}

//allPermissions.map(u => <h1 key={u.id}>{u.name}</h1>);

// const allPermissionsQuery = gql`
//   {
//     allPermissions {
//       id
//       name
//     }
//   }
// `;

export default ViewPermission;

//export default graphql(allPermissionsQuery)(ViewPermission);