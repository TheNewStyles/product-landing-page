import React, { Component } from 'react';

import '../styles/Features.css';
import logo from '../images/logo.svg';

class Features extends Component {  
  render() {
    
    return (
        <div className="features-item">
            <img src={logo} className="App-logo" alt="logo for blah" />
            <h2>{this.props.title}</h2>
            <p>{this.props.details}</p>
        </div>
      );
    } 
}

export default Features;