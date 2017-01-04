// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';

// Components
import ProjectButtons from '../ProjectButtons';

// Images
import tripFolioImg from '../../../public/images/tripfolio.jpg';

class TripFolio extends Component {
  render() {
    return(
      <div className='pageContent scrollContainer'>
        <Link to='/projects' className='closeProject'>
          X
        </Link>
        <div className='pageHeader'>
          <h3>Tripfolio</h3>
        </div>
        <div className='row'>
          <img src={tripFolioImg}
            className='projectImage'
            alt='Sparkling blue-green alpine lake flanked by mountains. Logo in middle reads "Tripfolio." Splash page for the site.'
          />
        </div>
        <div className='pageMain projectDescription'>
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
        </div> {/* --close pageMain-- */}
        <ProjectButtons projectName='tripfolio-group' />
      </div>
    );
  }
}

export default TripFolio;
