import React, { Component } from 'react';
import NavLink from './NavLink';

// import '../styles/DetailsButton.css';

class NavBar extends Component {  
  render() {
      // eslint-disable-next-line
    const navLinkStyles = "nav-link";

    return (
        <nav id={this.props.id}>
            <ul>
                <NavLink className={this.navLinkStyles} linkText="Home" />
                <NavLink className={this.navLinkStyles} linkText="Order" />
                <NavLink className={this.navLinkStyles} linkText="Contact" />
            </ul>
        </nav>
      );
    } 
}

export default NavBar;