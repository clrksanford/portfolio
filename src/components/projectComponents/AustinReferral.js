// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';

// Components
import ProjectButtons from '../ProjectButtons';

// Images
import austinReferral from '../../../public/images/austin-referral.jpg';

class AustinReferral extends Component {
  render() {
    return(
      <div className='pageContent scrollContainer'>
        <Link to='/design-comp' className='closeProject'>
          X
        </Link>
        <div className='pageHeader'>
          <h3>Austin Referral Page</h3>
        </div>
        <div className='row'>
          <img src={austinReferral}
            className='projectImage'
            alt='A screenshot of the splash page to an imaginary website which I designed with HTML5 & CSS3 based on a design comp provided by General Assembly'
          />
        </div>
        <div className='pageMain projectDescription'>
          <p>HTML & CSS mock-up based on design comp and assets. Resources provided by General Assembly Austin.</p>
        </div> {/* --close pageMain-- */}
        <ProjectButtons projectName='ga-austin-referral-page' />
      </div>
    );
  }
}

export default AustinReferral;
