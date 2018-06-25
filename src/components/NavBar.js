import React, { Component } from 'react';

import '../styles/NavBar.css';
import NavLink from './NavLink';

class NavBar extends Component {  
  render() {
    return (
        <nav id={this.props.id} className={this.props.className}>
            <ul className="nav-bar-ul-flex-container">
                <NavLink className="nav-link" linkText="Home" />
                <NavLink className="nav-link" linkText="Order" />
                <NavLink className="nav-link" linkText="Contact" />
            </ul>
        </nav>
      );
    } 
}

export default NavBar;