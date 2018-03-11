import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Permissions = ({ data: { allPermissions,} }) => {

  const permissions = [...allPermissions];

  return(
    <div>
       <h2>Show Branches</h2>
       <div> {permissions.map(u => <h4 key={u.id}>{u.name}</h4>)}</div>
    </div>
  );

}

const allPermissionsQuery_ = gql`
  {
    allPermissions {
      id
      name
    }
  }
`;

export default graphql(allPermissionsQuery_)(Permissions);