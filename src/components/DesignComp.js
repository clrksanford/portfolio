import React, {Component} from 'react';
import { Link } from 'react-router';

// Styles and images
import clemoImg from '../../public/images/clemo.jpg';
import austinReferralImg from '../../public/images/austin-referral.jpg';
import relaxrImg from '../../public/images/relaxr.jpg';

class Projects extends Component {
  render() {
    return(
      <div className='pageContent'>
        <div className='pageHeader'>
          <h3 className='projectHeader'>
            <Link to='/projects' className='toggleProjectPage'>
              Projects
            </Link>
          </h3> /{' '}
          <h3 className='activeProjectPage projectHeader'>
            Design Comp Practice
          </h3>
        </div>
        <div className='pageMain'>
          <div className='row flexContainerRow'>
            <Link to='/design-comp/clemo' className='projectTile'>
              <img src={clemoImg}
                alt='A screenshot of the splash page to an imaginary website titled "Clemo" which I designed with HTML5 & CSS3 based on a design comp provided by General Assembly'/>
            </Link>
            <Link to='/design-comp/austin-referral' className='projectTile'>
              <img src={austinReferralImg}
                alt='A screenshot of the splash page to an imaginary website titled "Austin Referral Page" which I designed with HTML5 & CSS3 based on a design comp provided by General Assembly'/>
            </Link>
          </div>
          <div className='row flexContainerRow'>
            <Link to='/design-comp/relaxr' className='projectTile'>
              <img src={relaxrImg}
                alt='A screenshot of the splash page to an imaginary website titled "Relaxr" which I designed with HTML5 & CSS3 based on a design comp provided by General Assembly'/>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
