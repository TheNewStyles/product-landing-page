import React, { Component } from 'react';

import '../styles/Footer.css';
import logo from '../images/logo.svg';

class Footer extends Component {  
  render() {
    
    return (
        <footer>
            <img src={logo} className="App-logo" alt="logo for blah" />
            <p>Created by Tyler Peterson Github: https://github.com/TheNewStyles</p>
        </footer>
      );
    } 
}

export default Footer;