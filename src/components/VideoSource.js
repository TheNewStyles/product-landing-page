import React, { Component } from 'react';

class VideoSource extends Component {  
  render() {
    
    return (
        <source src={this.props.src} type={this.props.type} />
      );
    } 
}

export default VideoSource;

