import React, { Component } from 'react';

import '../styles/Features.css';

class Features extends Component {  
  render() {
    
    return (
        <div className="features-item">
            <img src={this.props.logo} className="App-logo" alt={this.props.alt} />
            <h2>{this.props.title}</h2>
            <p>{this.props.details}</p>
        </div>
      );
    } 
}

export default Features;