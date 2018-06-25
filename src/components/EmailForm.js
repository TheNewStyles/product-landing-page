import React, { Component } from 'react';

import '../styles/EmailForm.css';
import ProductButton from './ProductButton';

class EmailForm extends Component {  
  render() {
    return (
        <article>
          <form id="form" action="" className={this.props.className}>
              <h4><label htmlFor="email">THE BEST STUFF SIGN UP HERE</label></h4>
              <input id="email" name="email" className="email-form-input" type="email" placeholder="Enter email" required/>
              <ProductButton id="submit" className="productbutton-email-button" name="submit" action="https://www.freecodecamp.com/email-submit" value="Subscribe to our deals"/>
          </form>
        </article>        
      );
    } 
}

export default EmailForm;