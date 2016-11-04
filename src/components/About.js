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
        <div className='row clearfix' id='aboutParagraph'>
          <img src={headshot} alt='headshot' id='headshot'/>
          <p>
          I am a highly independent critical-thinker with a passion for the arts and learning. As someone both process-oriented and creative, I enjoy the challenge presented by web development of using very linear, analytical programming languages to make unique, aesthetically-pleasing user experiences. As a literature major, I am an excellent communicator and think creatively to come up with innovative solutions.
          </p>
        </div>
        <h3>Interests</h3>
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
