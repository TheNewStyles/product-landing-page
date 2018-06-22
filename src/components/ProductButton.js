import React, { Component } from 'react';

import '../styles/ProductButton.css';

class ProductButton extends Component {  
  render() {
    return (
      <input type="button" id={this.props.id} className={this.props.className} name={this.props.name}  action={this.props.action} value={this.props.value} />
      );
    } 
}

export default ProductButton;