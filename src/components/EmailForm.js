import React, { Component } from 'react';

// import '../styles/DetailsButton.css';
import ProductButton from './ProductButton';

class EmailForm extends Component {  
  render() {
    return (
        <form id="form" action="">
            <label htmlFor="email">THE BEST STUFF SIGN UP HERE</label>
            <input id="email" name="email" type="email" placeholder="Enter email" required/>
            <ProductButton id="submit" name="submit" action="https://www.freecodecamp.com/email-submit" value="Submit"/>
        </form>
      );
    } 
}

export default EmailForm;