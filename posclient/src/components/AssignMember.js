import React from 'react';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class AssignMember extends React.Component {

  constructor(props) {
    super(props);
    console.log("props: ", props);
    extendObservable(this, {
      name: '',
      errors: {},
    });
  }
  

  onSubmit = async () => {
    const { name } = this;
    let response = null;

    try {
      response = await this.props.mutate({
        variables: { name },
      });
    } catch (err) {
      this.props.history.push('/login');
      return;
    }
  
    const { ok, errors } = response.data.createPermission;

    if (ok) {
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
    const { name, errors: { nameError } } = this;

    const errorList = [];

    if (nameError) {
      errorList.push(nameError);
    }

    return (
      <div>
            <h2>Assign member</h2>
            <div className="form-group">
              <input className="form-control" name="name" onChange={this.onChange} value={name} placeholder="Name" />
            </div>
            <button className="btn btn-primary" onClick={this.onSubmit}>Assign</button>
      </div>
    );
  }
}

const createPermissionMutation = gql`
  mutation($name: String!) {
    createPermission(name: $name) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(createPermissionMutation)(observer(AssignMember));