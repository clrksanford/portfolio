import React, {Component} from 'react';
import resumePic from '../../public/images/clark-sanford-resume.jpg';

class Resume extends Component {
  render() {
    return(
      <div className='pageContent'>
        <div className='pageHeader'>
          <h3>Resume</h3>
        </div>
        <div className='pageMain'>
          <img src={resumePic} alt='Resume' id='resume'/>
          <a href={resumePic} id='resumeLink' download>Download</a>
        </div>
      </div>
    );
  }
}

export default Resume;
