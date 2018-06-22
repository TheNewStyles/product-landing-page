import React, { Component } from 'react';

// import '../styles/DetailsButton.css';

class NavLink extends Component {  
  render() {
    return (
        <li><a className={this.props.className} href="google.com">{this.props.linkText}</a></li>
      );
    } 
}

export default NavLink;