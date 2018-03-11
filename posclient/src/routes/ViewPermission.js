import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const ViewPermission = ({ data: { allPermissions = [] } }) => allPermissions.map(u => <h1 key={u.id}>{u.name}</h1>);

const allPermissionsQuery = gql`
  {
    allPermissions {
      id
      name
    }
  }
`;

export default graphql(allPermissionsQuery)(ViewPermission);