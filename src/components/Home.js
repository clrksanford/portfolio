import React, {Component} from 'react';
import {Keyframes, Frame} from 'react-keyframes';
import headshot from '../../public/images/headshot.jpg';

class Home extends Component {
  render() {
    return(
      <div className="pageContent">
        <div className='pageHeader'>
          <h1>Portfolio of Clark Sanford</h1>
          <h2 id='homeSubtitle' className='fadeIn'>Full-Stack Web Developer Based in Austin, TX</h2>
        </div>
        <div className='row clearfix' id='aboutContainer'>
          <img src={headshot} alt='headshot' id='headshot'/>
          <div id='aboutParagraph'>
            <ul>
              <li>Literature major, world traveler</li>
              <li>Highly independent critical thinker</li>
              <li>Process-oriented and creative</li>
              <li>Excellent communicator</li>
              <li>Innovative problem solver</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
