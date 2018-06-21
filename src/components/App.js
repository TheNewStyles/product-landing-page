import React, { Component } from 'react';

import logo from '../images/logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="header">
          <div>
            <img id="header-img" src={logo} className="App-logo" alt="logo for blah" />
          </div>          
          <nav id="nav-bar">
            <ul>
              <li><a className="nav-link" href="google.com">Home</a></li>
              <li><a className="nav-link" href="google.com">About</a></li>
              <li><a className="nav-link" href="google.com">Contact</a></li>
            </ul>
          </nav>
        </header>
        <section>
          <article>
            <form id="form" action="">
              <label htmlFor="email">THE BEST STUFF SIGN UP HERE</label>
              <input id="email" name="email" type="email" placeholder="Enter email" required/>
              <input id="submit" name="submit" type="button" action="https://www.freecodecamp.com/email-submit" value="Submit" />
            </form>  
          </article>
          <article>
            <div>
              <img id="header-img" src={logo} className="App-logo" alt="logo for blah" />
              <h2>Fast Shipping</h2>
              <p>We make sure you recieve your trombone as soon as we have finished making it. We also provide free returns if you are not satisfied.</p>
            </div>
            <div>
              <img id="header-img" src={logo} className="App-logo" alt="logo for blah" />
              <h2>Fast Shipping</h2>
              <p>We make sure you recieve your trombone as soon as we have finished making it. We also provide free returns if you are not satisfied.</p>
            </div>
            <div>
              <img id="header-img" src={logo} className="App-logo" alt="logo for blah" />
              <h2>Fast Shipping</h2>
              <p>We make sure you recieve your trombone as soon as we have finished making it. We also provide free returns if you are not satisfied.</p>
            </div>
          </article>
          <article>
            <video width="620" controls
              poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg" >
              <source
                src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
                type="video/mp4" />
              <source
                src="https://archive.org/download/ElephantsDream/ed_hd.ogv"
                type="video/ogg" />
              <source
                src="https://archive.org/download/ElephantsDream/ed_hd.avi"
                type="video/avi" />
              Your browser doesn't support HTML5 video tag.
            </video>
          </article>
          <article>
            <div>
              <h3>Some info</h3>
              <p>Lorem ipsum</p>
              <input type="button" value="See details"/>
            </div>
            <div>
              <h3>Some info</h3>
              <p>Lorem ipsum</p>
              <input type="button" value="See details"/>
            </div>
            <div>
              <h3>Some info</h3>
              <p>Lorem ipsum</p>
              <input type="button" value="See details"/>
            </div>
          </article>
        </section>  
      </div>
    );
  }
}

export default App;
