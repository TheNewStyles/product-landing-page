import React, { Component } from 'react';

import '../styles/App.css';
import '../styles/FontScale.css';
import bread from '../images/bread.svg';
import leaf from '../images/leaf.svg';
import location from '../images/location-pointer.svg';
import DetailsContainer from './Details';
import Header from './Header';
import EmailForm from './EmailForm';
import Features from './Features';
import Video from './Video';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="flex-container-app ">
          <Header />          
          <EmailForm className="email-form" />
          <article className="flex-container-app gray-bg not-as-dark-purple-txt no-margin ">
            <Features title="Organic" alt="Organic leaf icon" logo={leaf} details="We use nothing but the finest organic ingredients. Sourced from our locals farmers and vendors."/>
            <Features title="Handcrafted"  alt="Bread icon" logo={bread} details="Made from scratch everyday." />
            <Features title="Local" alt="gps icon" logo={location} details="We are family owned and operated. Made with love right here in Salt Lake City, UT for over 10 years."/>
          </article>
          <Video />
          <article className="flex-container-app  gray-bg not-as-dark-purple-txt no-margin">
            <DetailsContainer title="Donuts" price="$17.99" details="Try our world famous donuts." />
            <DetailsContainer title="Cronuts"  price="$12.99" details="Our new croissant-doughnut pastry." />
            <DetailsContainer title="Cakes"  price="$14.99" details="Made to order. We handle all occasions." />
          </article>
        <Footer /> 
        </section>               
      </div>
    );
  }
}

export default App;
