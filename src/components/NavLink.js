import React, { Component } from 'react';

import '../styles/NavLink.css';

class NavLink extends Component {  
  render() {
    return (
        <li className={this.props.className}><a  href="google.com">{this.props.linkText}</a></li>
      );
    } 
}

export default NavLink;