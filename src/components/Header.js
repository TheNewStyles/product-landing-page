import React, { Component } from 'react';

import '../styles/Header.css'
import logo from '../images/cupcake.svg';
import NavBar from './NavBar';

class Header extends Component {  
  render() {
    return (
        <header id="header" className="flex-container-header rose-pink-bg">
          <figure className="logo-header">             
            <img id="header-img" src={logo} className="App-logo" alt="Logo for Muffin Top Bakery" />            
          </figure>          
          <NavBar id="nav-bar" className="nav-bar"/>
        </header>
      );
    } 
}

export default Header;











