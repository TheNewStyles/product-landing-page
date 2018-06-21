import React, { Component } from 'react';

// import '../styles/DetailsButton.css';
import logo from '../images/logo.svg';

class Features extends Component {  
  render() {
    
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo for blah" />
            <h2>{this.props.title}</h2>
            <p>{this.props.details}</p>
        </div>
      );
    } 
}

export default Features;