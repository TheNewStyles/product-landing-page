import React, { Component } from 'react';

import '../styles/EmailForm.css';
import ProductButton from './ProductButton';

class EmailForm extends Component {  
  render() {
    return (
        <article className="dark-purple-txt">
          <form id="form" action="" className={this.props.className}>
              <h4><label htmlFor="email">Subscribe To Muffin Tops Bakery's Email List</label></h4>
              <input id="email" name="email" className="email-form-input" type="email" placeholder="Enter email" required/>
              <ProductButton id="submit" className="productbutton-email-button" name="submit" action="https://www.freecodecamp.com/email-submit" value="Get Sweet Deals!"/>
          </form>
        </article>        
      );
    } 
}

export default EmailForm;