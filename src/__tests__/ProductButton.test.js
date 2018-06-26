import React from 'react';
import ReactDOM from 'react-dom';
import ProductButton from '../Components/ProductButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});