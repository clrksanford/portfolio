import React, {Component} from 'react';

// Images
import dancePic from '../../public/images/int-contra.jpg';
import yogaPic from '../../public/images/int-yoga2.jpg';
import pianoPic from '../../public/images/int-piano.jpg';
import travelPic from '../../public/images/int-plane2.jpg';
import headshot from '../../public/images/headshot.jpg';

class About extends Component {
  render() {
    return(
      <div className='pageContent'>
        <div className='pageHeader'>
          <h3>About Me</h3>
        </div>
        <div className='row clearfix' id='aboutContainer'>
          <img src={headshot} alt='headshot' id='headshot'/>
          <div id='aboutParagraph'>
            <p id='p1'>
            Literature major, world traveler
            </p>
            <p id='p2'>
            Highly independent critical thinker
            </p>
            <p id='p3'>
            Process-oriented and creative
            </p>
            <p id='p4'>
            Excellent communicator
            </p>
            <p id='p5'>
            Innovative problem solver
            </p>
          </div>
        </div>
        <div className='pageHeader'>
          <h3>Interests</h3>
        </div>
        <div className='flexContainer'>
          <div className='tile'>
            <h5>Social Dance</h5>
            <img src={dancePic} alt='Social dance'/>
          </div>
          <div className='tile'>
            <h5>Yoga</h5>
            <img src={yogaPic} alt='Yoga'/>
          </div>
          <div className='tile'>
            <h5>Piano</h5>
            <img src={pianoPic} alt='Piano'/>
          </div>
          <div className='tile'>
            <h5>Travel</h5>
            <img src={travelPic} alt='Travel'/>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
