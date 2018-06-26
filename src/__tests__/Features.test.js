import React from 'react';
import ReactDOM from 'react-dom';
import Features from '../Components/Features';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Features />, div);
  ReactDOM.unmountComponentAtNode(div);
});