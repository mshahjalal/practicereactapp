import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <br />

        <form action="/action_page.php">
          <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" class="form-control" id="email" />
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" />
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        
        <Home />
      </div>
    );
  }
}

export default App;
