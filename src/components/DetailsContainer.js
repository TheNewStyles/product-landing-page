import React, { Component } from 'react';

import '../styles/DetailsContainer.css';
import ProductButton from './ProductButton';

class DetailsContainer extends Component {  
  render() {
    return (
        <div className="details-item">
            <h3>{this.props.title}</h3>
            <p>{this.props.details}</p>
            <ProductButton value="See Details"/>
        </div>
      );
    } 
}

export default DetailsContainer;