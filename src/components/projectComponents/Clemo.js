// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';

// Components
import ProjectButtons from '../ProjectButtons';

// Images
import clemoImg from '../../../public/images/clemo.jpg';

class Clemo extends Component {
  render() {
    return(
      <div className='pageContent scrollContainer'>
        <Link to='/design-comp' className='closeProject'>
          X
        </Link>
        <div className='pageHeader'>
          <h3>Clemo</h3>
        </div>
        <div className='pageMain'>
          <img src={clemoImg} className='projectImage'
            alt='A screenshot of the splash page to an imaginary website which I designed with HTML5 & CSS3 based on a design comp provided by General Assembly' />
          <p>HTML & CSS mock-up based on design comp and assets. Resources provided by General Assembly Austin.</p>
          <ProjectButtons projectName='ga-clemo'/>
        </div> {/* --close pageMain-- */}
      </div>
    );
  }
}

export default Clemo;
