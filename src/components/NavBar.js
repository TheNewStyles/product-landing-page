import React, { Component } from 'react';

// import '../styles/DetailsButton.css';

class NavBar extends Component {  
  render() {
    return (
        <nav id={this.props.id}>
            <ul>
                <li><a className={this.props.className} href="google.com">Home</a></li>
                <li><a className={this.props.className} href="google.com">About</a></li>
                <li><a className={this.props.className} href="google.com">Contact</a></li>
            </ul>
        </nav>
      );
    } 
}

export default NavBar;