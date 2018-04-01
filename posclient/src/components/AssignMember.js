import React from 'react';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';


class AssignMember extends React.Component {

  constructor(props) {
    super(props);
   
    extendObservable(this, {
      userId: '',
      teamId: this.props.currentTeamId,
      errors: {},
    });
  }
  

  onSubmit = async () => {
    const { teamId, userId } = this;
    let response = null;

    try {
      console.log("teamId", teamId, "userId", userId,);
      response = await this.props.mutate({
        variables: { userId, teamId },
      });
    } catch (err) {
      console.log("err: ", err);
      //this.props.history.push('/login');
      return;
    }
  
    const { ok, errors } = response.data.assignTeamMember;

    if (ok) {
      console.log("ok.....");
      //this.props.history.push('/view-branch');
      
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });

      this.errors = err;
    }
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this[name] = value;
  };

  

  render() {

    const  memberList  = this.props.members;    

    const { errors: { nameError } } = this;

    const errorList = [];

    if (nameError) {
      errorList.push(nameError);
    }
    

    let userOptions = _.map(memberList, (userInfo) => {
      return <option key={`option_${userInfo.id}`} value={userInfo.id}>{userInfo.email}</option>;
    });

    return (
      <div>
            <h2>Assign member</h2>
            <div className="form-group">
              <select className="form-control" onChange={this.onChange} value={this.userId} name="userId">
                <option key="option_0" value="0">Select member</option>;
                {userOptions}
              </select>
            </div>
            <button className="btn btn-primary" onClick={this.onSubmit}>Assign</button>
      </div>
    );
  }
}

const assignTeamMemberMutation = gql`
  mutation($teamId: Int!, $userId: Int!) {
    assignTeamMember(teamId: $teamId, userId: $userId) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(assignTeamMemberMutation)(observer(AssignMember));