import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


const newPermissionSubscription = gql`
  subscription {
    newPermission{
      id
      name
    }
  }
`;

class Permissions extends React.Component {

  componentWillMount() {
    this.props.data.subscribeToMore({
      document: newPermissionSubscription,
      variables: {
        //channelId: this.props.channelId,
      },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData) {
          return prev;
        }

        return {
          ...prev,
          allPermissions: [...prev.allPermissions, subscriptionData.newPermission],
        };
      },
    });
  }

  render() {
    const { data: { loading, allPermissions } } = this.props;
    const permissions = [...allPermissions];

    return loading ? null : (
      <div>
      <br/>
      <br/>
       <h2>Show Branches</h2>
       <div> {permissions.map(u => <p key={u.id}>{u.name}</p>)}</div>
    </div>
    );
  }


}


// const Permissions = ({ data: { allPermissions,} }) => {
//   const permissions = [...allPermissions];

//   return(
//     <div>
//       <br/>
//       <br/>
//        <h2>Show Branches</h2>
//        <div> {permissions.map(u => <p key={u.id}>{u.name}</p>)}</div>
//     </div>
//   );

// }


const allPermissionsQuery = gql`
  query {
    allPermissions {
      id
      name
    }
  }
`;


export default graphql(allPermissionsQuery, {
  variables: props => ({
    //channelId: props.channelId,
  }),
})(Permissions);

//export default graphql(allPermissionsQuery)(Permissions);