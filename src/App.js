import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';
//import Home from './Home';

import UserList from './components/user/userList.js';

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';


const networkInterface = createNetworkInterface({ uri: 'http://localhost:4000/graphql' });
networkInterface.use([{
  applyMiddleware(req, next) {
    setTimeout(next, 500);
  },
}]);

/*function dataIdFromObject (result) {
  if (result.__typename) {
    if (result.id !== undefined) {
      return `${result.__typename}:${result.id}`;
    }
  }
  return null;
}*/

const client = new ApolloClient({
  networkInterface,
  customResolvers: {
    Query: {
      //here find user
    },
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="App">            
            <Switch>
              <Route exact path="/" component={UserList}/>
            </Switch>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
