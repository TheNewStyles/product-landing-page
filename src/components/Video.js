import React, { Component } from 'react';

import VideoSource from './VideoSource.js'
import '../styles/Video.css';
class Video extends Component {  
  render() {
    
    return (
        <article className="video">
          <video width="620" controls >
              <VideoSource src="" type="video/mp4" />
              <VideoSource src="https://archive.org/download/ElephantsDream/ed_hd.ogv" type="video/mp4" />
              <VideoSource src="https://archive.org/download/ElephantsDream/ed_hd.avi" type="video/mp4" />
              Your browser doesn't support HTML5 video tag.
          </video>
        </article>        
      );
    } 
}

export default Video;

