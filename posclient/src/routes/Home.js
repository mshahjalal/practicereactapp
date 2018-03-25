import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import AppLayout from '../components/AppLayout';

//const Home = ({ data: { allUsers = [] } }) => allUsers.map(u => <h1 key={u.id}>{u.email}</h1>);

const Home = ({ data: { allUsers } }) => {

  const allUsersList = allUsers ? [...allUsers] : [];

  return (
      <div>
        <AppLayout />
        <div className="container">
              <h2>Show user list</h2>
              {allUsersList.map(u => <p key={u.id}>{u.email}</p>)}
        </div>
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
