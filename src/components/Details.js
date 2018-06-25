import React, { Component } from 'react';

import '../styles/Details.css';
import ProductButton from './ProductButton';

class DetailsContainer extends Component {  
  render() {
    return (
        <div className="details-item">
            <h3>{this.props.title}</h3>
            <p>{this.props.details}</p>
            <ProductButton className="productbutton-email-button" value={this.props.price}/>
        </div>
      );
    } 
}

export default DetailsContainer;