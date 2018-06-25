import React, { Component } from 'react';

import logo from '../images/logo.svg';
import '../styles/Header.css'
import NavBar from './NavBar';

class Header extends Component {  
  render() {
    return (
        <header id="header" className="flex-container-header">
          <figure className="logo-header">             
            <img id="header-img" src={logo} className="App-logo" alt="logo for blah" />
            <figcaption>My company logo</figcaption>
          </figure>          
          <NavBar id="nav-bar" className="nav-bar"/>
        </header>
      );
    } 
}

export default Header;











