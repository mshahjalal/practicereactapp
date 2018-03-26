import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
//import decode from 'jwt-decode';

import Home from './Home';
import Register from './Register';
import Login from './Login';
import CreateTeam from './CreateTeam';
import Logout from './Logout';
import ViewTeam from './ViewTeam';
import CreatePermission from './CreatePermission';
import ViewPermission from './ViewPermission';
import isAuthenticated from '../auth.js';
import AssignTeamMember from './AssignTeamMember';



const PrivateRoute = ({ component: Component, ...rest }) => ( 
  <Route
    {...rest}
    render={props =>
      (isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      ))}
  />
);

export default () => (
  <BrowserRouter>
    <Switch>     
          <PrivateRoute path="/logout" exact component={Logout} />
          <PrivateRoute path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/create-team" exact component={CreateTeam} />
          <PrivateRoute path="/create-branch" exact component={CreatePermission} />
          <PrivateRoute path="/view-branch" exact component={ViewPermission} />
          <PrivateRoute path="/view-team" exact component={ViewTeam} />
          <PrivateRoute path="/assign-team-member/:teamId?" exact component={AssignTeamMember} />
    </Switch>
  </BrowserRouter>
);