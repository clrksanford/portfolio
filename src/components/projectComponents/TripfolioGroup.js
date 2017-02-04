// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';

// Components
import ProjectButtons from '../ProjectButtons';

// Images
import tripFolioImg from '../../../public/images/tripfolio.jpg';

class TripFolioGroup extends Component {
  render() {
    return(
      <div className='pageContent scrollContainer'>
        <Link to='/projects' className='closeProject'>
          X
        </Link>
        <div className='pageHeader'>
          <h3>Tripfolio, Version 1.0</h3>
        </div>
        <div className='row'>
          <img src={tripFolioImg}
            className='projectImage'
            alt='Sparkling blue-green alpine lake flanked by mountains. Logo in middle reads "Tripfolio." Splash page for the site.'
          />
        </div>
        <div className='pageMain projectDescription'>
          <p>
            Born from my own passion for traveling and planning, this travel-planner app allows users to see top recommendations from Yelp for a given destination and save the ones they want to their "Trip Builder." They can also search and retrieve recommendations from other users' trips.
          </p>
          <p>
          <span className='emphasis'>Tools:</span> {' '}
            Built with Firebase and React.js.
          </p>
          <p>
          <span className='emphasis'>Description:</span> {' '}
            This app was built in a group of 3 over the course of 5 days. Since the original idea was mine, I wore the hat of project manager as well as developer. See the GitHub README below for further descriptions of the inspiration behind the app and the process of executing it.
          </p>
        </div> {/* --close pageMain-- */}
        <ProjectButtons projectName='tripfolio-group' />
      </div>
    );
  }
}

export default TripFolioGroup;
