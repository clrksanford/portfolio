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
          <Keyframes>
            <Frame duration={500}>This</Frame>
            <Frame duration={500}>This is</Frame>
            <Frame duration={500}>This is <em>animated</em>.</Frame>
          </Keyframes>
            <ul>
              <li className='fadeIn'>Literature major, world traveler</li>
              <li className='fadeIn'>Highly independent critical thinker</li>
              <li className='fadeIn'>Process-oriented and creative</li>
              <li className='fadeIn'>Excellent communicator</li>
              <li className='fadeIn'>Innovative problem solver</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
