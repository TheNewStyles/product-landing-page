import React, { Component } from 'react';

import '../styles/App.css';
import DetailsContainer from './DetailsContainer';
import Header from './Header';
import EmailForm from './EmailForm';
import Features from './Features';
import Video from './Video';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <article>
            <EmailForm />
          </article>
          <article>
            <Features title="Faster Shipping" details="this is the fastest shipping you could ever imagine"/>
            <Features title="Faster Shipping" details="this is the fastest shipping you could ever imagine" />
            <Features title="Faster Shipping" details="this is the fastest shipping you could ever imagine"/>
          </article>
          <article>
            <Video />
          </article>
          <article>
            <DetailsContainer title="Product Details 1" details="these are details" />
            <DetailsContainer title="Product Details 2" details="these are details" />
            <DetailsContainer title="Product Details 3" details="these are details" />
          </article>
        </section>  
      </div>
    );
  }
}

export default App;
