import React from 'react';
import ReactDOM from 'react-dom';
import VideoSource from '../Components/VideoSource';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoSource />, div);
  ReactDOM.unmountComponentAtNode(div);
});