import React, { Component } from 'react';

// import '../styles/DetailsButton.css';
import VideoSource from './VideoSource.js'

class Video extends Component {  
  render() {
    
    return (
        <video width="620" controls poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg" >
            <VideoSource src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4" type="video/mp4" />
            <VideoSource src="https://archive.org/download/ElephantsDream/ed_hd.ogv" type="video/mp4" />
            <VideoSource src="https://archive.org/download/ElephantsDream/ed_hd.avi" type="video/mp4" />
            Your browser doesn't support HTML5 video tag.
        </video>
      );
    } 
}

export default Video;

