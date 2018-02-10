/*
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';

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



const client = new ApolloClient({
  networkInterface,
  customResolvers: {
    Query: {
      
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
*/




