import React, {Component} from 'react';
import { Link } from 'react-router';

import tripFolioImg from '../../../public/images/tripfolio.jpg';

class DateNight extends Component {
  render() {
    return(
      <div className='pageContent scrollContainer'>
        <Link to='/projects' className='closeProject'>
          X
        </Link>
        <div className='pageHeader'>
          <h3>Tripfolio</h3>
        </div>
        <div className='pageMain'>
          <img src={tripFolioImg} alt='Sparkling blue-green alpine lake flanked by mountains. Logo in middle reads "Tripfolio." Splash page for the site.' className='projectImage'/>
          <p>
          A web app designed to overhaul the travel planning experience by allowing users to save recommendations and share them with others.
          </p>
          <p>
          <span className='emphasis'>Tools:</span> {' '}
          Built with Firebase and React.js.
          </p>
          <p>
          <span className='emphasis'>Description:</span> {' '}
          As an avid traveler, this is a site I have wanted to build for a long time, and I finally got the opportunity during our second group project at GA.
          </p>
          <div className='buttonContainer'>
            <a href='https://clrksanford.github.io/tripfolio'
              className='button projectLink'
              target='_blank'>
              See the site
            </a>
            <a href='https://github.com/clrksanford/tripfolio'
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

export default DateNight;
