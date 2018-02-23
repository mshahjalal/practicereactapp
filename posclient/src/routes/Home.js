import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Home = ({ data: { allUsers = [] } }) => allUsers.map(u => <h1 key={u.id}>{u.email}</h1>);

const allUsersQuery = gql`
  {
    allUsers {
      id
      email
    }
  }
`;

export default graphql(allUsersQuery)(Home);

/*import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Home = () => (
  <div className='wrapper'>
    <Sidebar />
    <Header />
    <div className='container'>
      
    </div>
  </div>
);


export default Home;*/
