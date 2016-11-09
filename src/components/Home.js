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
              <p id='p1'>Literature major, world traveler</p>
              <p id='p2'>Highly independent critical thinker</p>
              <p id='p3'>Process-oriented and creative</p>
              <p id='p4'>Excellent communicator</p>
              <p id='p5'>Innovative problem solver</p>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
