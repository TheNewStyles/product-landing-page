import React, { Component } from 'react';

import '../styles/App.css';
import '../styles/FontScale.css';
import DetailsContainer from './DetailsContainer';
import Header from './Header';
import EmailForm from './EmailForm';
import Features from './Features';
import Video from './Video';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="flex-container-app">
          <Header />          
          <EmailForm className="email-form" />
          <article className="flex-container-app">
            <Features title="Faster Shipping" details="this is the fastest shipping you could ever imagine"/>
            <Features title="Faster Shipping" details="this is the fastest shipping you could ever imagine" />
            <Features title="Faster Shipping" details="this is the fastest shipping you could ever imagine"/>
          </article>
          <Video />
          <article className="flex-container-app">
            <DetailsContainer title="Product Details 1" details="these are details" />
            <DetailsContainer title="Product Details 2" details="these are details" />
            <DetailsContainer title="Product Details 3" details="these are details" />
          </article>
        <Footer /> 
        </section>               
      </div>
    );
  }
}

export default App;
