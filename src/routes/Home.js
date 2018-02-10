import React from 'react';
import { gql, graphql } from 'react-apollo';
//import './Home.scss';

const Home = ({ data: { allUsersList = [] } }) => allUsersList.map(u => <h1 key={u.id}>{u.email}</h1>);

const allUsersQuery = gql` 
  {
    allUsers {
      id,
      email
    }
  }
`;

export default graphql(allUsersQuery)(Home);
