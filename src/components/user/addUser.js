import React from 'react';
import { gql, graphql } from 'react-apollo';

import { userListQuery } from './userList.js';

const AddUser = ({ mutate }) => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      mutate({ 
        variables: { username: evt.target.value },
        optimisticResponse: {
          createUser: {
            username: evt.target.value,            
            email: "shah"+Math.round(Math.random() * -1000000)+"@gmail.com",
            password:"12345678",
            id: Math.round(Math.random() * -1000000),
            __typename: 'User',
          },
        },
        update: (store, { data: { createUser } }) => {
            // Read the data from the cache for this query.
            const data = store.readQuery({ query: userListQuery });
            // Add our user from the mutation to the end.
            data.allUsers.push(createUser);
            // Write the data back to the cache.
            store.writeQuery({ query: userListQuery, data });
          },
      });
      evt.target.value = '';
    }
  };

  return (
    <input
      type="text"
      placeholder="New user"
      onKeyUp={handleKeyUp}
    />
  );
};

const addUserMutation = gql`
  mutation createUser({$username: String!, $email: String!, $password: String!}){
    createUser(username: $username, email: $email, password: $password) {
      id
      username
      email
      password
    }
  }
`;


const AddUserWithMutation = graphql(
  addUserMutation
)(AddUser);

export default AddUserWithMutation;