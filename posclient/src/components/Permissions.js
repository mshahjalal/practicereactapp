import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


const newPermissionSubscription = gql`
  subscription($name: String!) {
    newPermission(name: $name){
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
        name: this.props.name
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
    //const permissionList = [ ...allPermissions ];

    if (loading) {
        return null;
    }

    console.log("allPermissions: ", allPermissions);

    return (
      <div>
          <h2>Show Branches</h2>
        </div>
    );


    // return loading ? null : (
    //   <div>
    //   <br/>
    //   <br/>
    //    <h2>Show Branches</h2>
    //    <div> {permissionList.map(u => <p key={u.id}>{u.name}</p>)}</div>
    // </div>
    // );
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
  query($name: String!) {
    allPermissions(name: $name) {
      id
      name
    }
  }
`;


export default graphql(allPermissionsQuery, {
  variables: props => ({
    name: props.name,
  }),
})(Permissions);

//export default graphql(allPermissionsQuery)(Permissions);