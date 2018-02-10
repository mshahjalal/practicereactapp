import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h2>Test scss in react app</h2>
        <ul>
          <li>list 1</li>
          <li>list 2</li>
          <li>list 3</li>
          <li>list 4</li>
          <li>list 5</li>
          <li>list 6</li>
        </ul>

        <ol>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Coca Cola</li>
        </ol>
        
      </div>
    );
  }
}

export default Home;
