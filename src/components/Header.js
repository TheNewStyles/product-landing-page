import React, { Component } from 'react';

// import '../styles/DetailsButton.css';
import logo from '../images/logo.svg';
import NavBar from './NavBar';

class Header extends Component {  
  render() {
    return (
        <header id="header">
          <div> 
            <img id="header-img" src={logo} className="App-logo" alt="logo for blah" />
          </div>          
          <NavBar id="nav-bar" className="nav-link" />
        </header>
      );
    } 
}

export default Header;











