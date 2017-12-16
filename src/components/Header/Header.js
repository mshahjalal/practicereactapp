import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav class="navbar navbar-toggleable-md navbar-light bg-faded fixed-top">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Navbar</a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
           

            <img src="http://lorempixel.com/output/people-q-c-200-200-9.jpg" width="40" height="40" class="rounded-circle float-right"/>
          </div>          
        </nav>     
      </div>
    );
  }
}

export default Header;
