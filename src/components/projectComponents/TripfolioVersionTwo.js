// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';

// Components
import ProjectButtons from '../ProjectButtons';

// Images
import tripFolioImg from '../../../public/images/tripfolio.jpg';

class TripFolioVersionTwo extends Component {
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
            Building on the MVP completed for our first group project, I chose to focus my weeklong final project on refactoring the original code, adding Redux, and adding a new feature. The new feature was a component allowing users to create their own custom tiles 
          </p>
          <p>
          <span className='emphasis'>Tools:</span> {' '}
            Built with Firebase Auth, Node.js, Redux, and React.js.
          </p>
        </div> {/* --close pageMain-- */}
        <ProjectButtons projectName='tripfolio-version-2' />
      </div>
    );
  }
}

export default TripFolioVersionTwo;
