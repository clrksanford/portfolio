import React, {Component} from 'react';

// Images
import dancePic from '../../public/images/int-contra.jpg';
import yogaPic from '../../public/images/int-yoga2.jpg';
import pianoPic from '../../public/images/int-piano.jpg';
import travelPic from '../../public/images/int-plane2.jpg';

class About extends Component {
  render() {
    return(
      <div className='pageContent'>
        <div className='pageHeader'>
          <h3>Skills</h3>
        </div>
        <div className='row'>
          <div className='column'>
            <p>
              <span className='emphasis'>Languages:</span> {' '}
              JavaScript, HTML, CSS
            </p>
            <p>
              <span className='emphasis'>Client-Side:</span> {' '}
              Bootstrap, jQuery, AJAX, React.js
            </p>
          </div>
          <div className='column'>
            <p>
              <span className='emphasis'>Server-Side:</span> {' '}
              Node.js, Express, MongoDB, Firebase
            </p>
            <p>
              <span className='emphasis'>Version Control:</span> {' '}
              Git, GitHub
            </p>
          </div>
        </div>
        <div className='pageHeader'>
          <h3>Interests</h3>
        </div>
        <div className='flexContainerRow'>
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
