import React, { Component } from 'react';

// import '../styles/DetailsButton.css';

class VideoSource extends Component {  
  render() {
    
    return (
        <source src={this.props.src} type={this.props.type} />
      );
    } 
}

export default VideoSource;

