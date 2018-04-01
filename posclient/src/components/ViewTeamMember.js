import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


const newTeamMemberSubscription = gql`
  subscription($teamId: Int!) {
    newTeamMember(teamId: $teamId){
      id
      teamId,
      userId
    }
  }
`;

class TeamMembers extends React.Component {

  componentWillMount() {
    this.unsubscribe = this.subscribe(this.props.teamId);   
  }

  /*Start not need for this functionality*/
  componentWillReceiveProps({ teamId }) {
    if (this.props.teamId === teamId) {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
      this.unsubscribe = this.subscribe(teamId);
    }
  }
  /*end not need for this functionality*/

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  subscribe = teamId => this.props.data.subscribeToMore({
    document: newTeamMemberSubscription,
    variables: {
      teamId
    },
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData) {
        return prev;
      }
    //   console.log("prev: ", prev);
    //   console.log("subscriptionData: ", subscriptionData);
    
      return {
        ...prev,
        allTeamMembers: [...prev.allTeamMembers, subscriptionData.data.newTeamMember],
      };
    },
  });
  

  render() {

    // console.log("this.props: ", this.props);

    const { data: { loading, allTeamMembers } } = this.props;

    if(loading) return false;

    // console.log("loading: ", loading);
    // console.log("allTeamMembers: ", allTeamMembers);

    return loading ? null : (
      <div>
      <br/>
      <br/>
       <h2>Show team members</h2>
       <div> {allTeamMembers.map(tm => <p key={tm.id}>{tm.userId}</p>)}</div>
    </div>
    );
  }

}



const allTeamMembersQuery = gql`
  query($teamId: Int!) {
    allTeamMembers(teamId:$teamId){
      id
      userId
      teamId
    }
  }
`;


export default graphql(allTeamMembersQuery, {
  variables: props => ({
    teamId: props.teamId,
  }),
  options: {
    fetchPolicy: 'network-only', //data get from netwoek(means server) not header cache(browser header cache)
  }
})(TeamMembers);