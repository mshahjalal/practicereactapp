import React from 'react';
import {
  Link
} from 'react-router-dom'

import {
    gql,
    graphql,
} from 'react-apollo';

import AddUser from './addUser';

const UserList = ({ data: {loading, error, users }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="userList">
      <AddUser />
      { users.map( usr =>
        (<div key={usr.id} className={'user ' + (usr.id < 0 ? 'optimistic' : '')}>
          <Link to={usr.id < 0 ? `/` : `user/${usr.id}`}>
            {usr.username}
          </Link>
        </div>)
      )}
    </div>
  );
};

export const userListQuery = gql`
  query userListQuery {
    allUsers {
      id
      username
      email
    }
  }
`;

export default graphql(userListQuery, {
  options: { pollInterval: 5000 },
})(UserList);
