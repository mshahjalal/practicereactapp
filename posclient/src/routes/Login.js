import React from 'react';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';
import { gql, graphql } from 'react-apollo';

class Login extends React.Component {
  constructor(props) {
    super(props);

    extendObservable(this, {
      email: '',
      password: '',
      errors: {},
    });
  }

  onSubmit = async () => {
    const { email, password } = this;
    const response = await this.props.mutate({
      variables: { email, password },
    });

    const {
      ok, token, refreshToken, errors,
    } = response.data.login;

    if (ok) {
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      this.props.history.push('/');
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
    const { email, password, errors: { emailError, passwordError } } = this;

    const errorList = [];

    if (emailError) {
      errorList.push(emailError);
    }

    if (passwordError) {
      errorList.push(passwordError);
    }

console.log("errorList: ", errorList);

    return (
      <div>
        <h2>Login</h2>
        
            <input name="email" onChange={this.onChange} value={email} placeholder="Email" />
            <input
              name="password"
              onChange={this.onChange}
              value={password}
              type="password"
              placeholder="Password" />
          <button onClick={this.onSubmit}>Submit</button>
        
      </div>
    );
  }
}

const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      token
      refreshToken
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(loginMutation)(observer(Login));