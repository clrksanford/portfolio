// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';

// Components
import ProjectButtons from '../ProjectButtons';

// Images
import relaxr from '../../../public/images/relaxr.jpg';

class Relaxr extends Component {
  render() {
    return(
      <div className='pageContent scrollContainer'>
        <Link to='/design-comp' className='closeProject'>
          X
        </Link>
        <div className='pageHeader'>
          <h3>Relaxr</h3>
        </div>
        <div className='row'>
          <img src={relaxr}
            className='projectImage'
            alt='A screenshot of the splash page to an imaginary website which I designed with HTML5 & CSS3 based on a design comp provided by General Assembly'
          />
        </div>
        <div className='pageMain projectDescription'>
          <p>HTML & CSS mock-up based on design comp and assets. Resources provided by General Assembly Austin.</p>
        </div> {/* --close pageMain-- */}
        <ProjectButtons projectName='ga-relaxr' />
      </div>
    );
  }
}

export default Relaxr;
