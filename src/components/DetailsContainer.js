import React, { Component } from 'react';

// import '../styles/DetailsButton.css';
import ProductButton from './ProductButton';

class DetailsContainer extends Component {  
  render() {
    return (
        <div>
            <h3>{this.props.title}</h3>
            <p>{this.props.details}</p>
            <ProductButton value="See Details"/>
        </div>
      );
    } 
}

export default DetailsContainer;