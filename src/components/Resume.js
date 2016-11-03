import React, {Component} from 'react';
import resumePic from '../../public/images/clark-sanford-resume.jpg';

class Resume extends Component {
  render() {
    return(
      <div className='pageContent'>
        <h3>Resume</h3>
        <a href={resumePic} download>Download</a>
      </div>
    );
  }
}

export default Resume;
