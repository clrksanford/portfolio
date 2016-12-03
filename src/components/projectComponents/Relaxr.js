import React, {Component} from 'react';
import { Link } from 'react-router';

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
        <div className='pageMain'>
          <img src={relaxr} className='projectImage'
            alt='A screenshot of the splash page to an imaginary website which I designed with HTML5 & CSS3 based on a design comp provided by General Assembly'/>
          <p>HTML & CSS mock-up based on design comp and assets. Resources provided by General Assembly Austin.</p>
          <div className='buttonContainer'>
            <a href='https://clrksanford.github.io/ga-relaxr/'
              className='button projectLink'
              target='_blank'>
              See the site
            </a>
            <a href='https://github.com/clrksanford/ga-relaxr'
              className='button projectLink'
              target='_blank'>
              See the code
            </a>
          </div> {/* --close buttonContainer-- */}
        </div> {/* --close pageMain-- */}
      </div>
    );
  }
}

export default Relaxr;
