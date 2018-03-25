import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import AppLayout from '../components/AppLayout';

class Register extends React.Component {
  state = {
    username: '',
    usernameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
  };

  onSubmit = async () => {
    this.setState({
      usernameError: '',
      emailError: '',
      passwordError: '',
    });

    const { username, email, password } = this.state;
    const response = await this.props.mutate({
      variables: { username, email, password },
    });

    const { ok, errors } = response.data.register;

    if (ok) {
      this.props.history.push('/');
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });

      this.setState(err);
    }
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password, usernameError, emailError, passwordError } = this.state;

    const errorList = [];

    if (usernameError) {
      errorList.push(usernameError);
    }

    if (emailError) {
      errorList.push(emailError);
    }

    if (passwordError) {
      errorList.push(passwordError);
    }

    return (
      <div>
          <AppLayout />

          <div className="container">
            <h2>Register</h2>        
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input name="username" onChange={this.onChange} value={username} className="form-control" placeholder="Username" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input name="email" className="form-control" onChange={this.onChange} value={email} placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input name="password" className="form-control" onChange={this.onChange} value={password} type="password" placeholder="Password" />
              </div>
              <button onClick={this.onSubmit} className="btn btn-primary cursor-pointer">Submit</button>
          </div>
      </div>
    );
  };
}

const registerMutation = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(registerMutation)(Register);