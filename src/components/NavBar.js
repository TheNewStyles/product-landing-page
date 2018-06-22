import React, { Component } from 'react';
import NavLink from './NavLink';

 import '../styles/NavBar.css';

class NavBar extends Component {  
  render() {
      // eslint-disable-next-line
    const navLinkClass = "nav-link";

    return (
        <nav id={this.props.id} className={this.props.className}>
            <ul className="nav-bar-ul-flex-container">
                <NavLink className={this.navLinkClass} linkText="Home" />
                <NavLink className={this.navLinkClass} linkText="Order" />
                <NavLink className={this.navLinkClass} linkText="Contact" />
            </ul>
        </nav>
      );
    } 
}

export default NavBar;