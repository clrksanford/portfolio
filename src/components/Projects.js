import React, {Component} from 'react';
import { Link } from 'react-router';

// Styles and images
import ticTacToeImg from '../../public/images/tic-tac-toe.jpg';
import tripFolioImg from '../../public/images/tripfolio.jpg';
import tripFolioTwoImg from '../../public/images/tripfolio-v-2.jpg';
import danceFinderImg from '../../public/images/dance-finder.jpg';
import dateNightImg from '../../public/images/date-night.jpg';

class Projects extends Component {
  render() {
    return(
      <div className='pageContent'>
        <div className='pageHeader'>
          <h3 className='activeProjectPage projectHeader'>
            Projects
          </h3> /{' '}
          <h3 className='projectHeader'>
            <Link to='/design-comp' className='toggleProjectPage'>
              Design Comp Practice
            </Link>
          </h3>
        </div>
        <div className='pageMain'>
          <div className='row'>
            <p>
              Check my&nbsp;
              <a id='projectBlogLink'
                target='_blank'
                href='https://medium.com/@clrksanford/general-assembly-group-projects-a-retrospective-dee6c996cb5a#.kpm38iadq'
              >
                blog
              </a>
                &nbsp;for more info on the inspiration and process behind these projects.
            </p>
          </div>
          <div className='row flexContainerRow'>
            <Link to='/projects/tripfolio-version-2' className='projectTile'>
              <img src={tripFolioTwoImg} alt='A mountain lake with text "TripFolio" the splash page for a website' />
            </Link>
            <Link to='/projects/tripfolio-group' className='projectTile'>
              <img src={tripFolioImg} alt='A mountain lake with text "TripFolio" the splash page for a website' />
            </Link>
          </div>
          <div className='row flexContainerRow'>
            <Link to='/projects/dance-finder' className='projectTile'>
              <img src={danceFinderImg} alt='Tic Tac Toe board with blue background' />
            </Link>
            <Link to='/projects/date-night' className='projectTile'>
              <img src={dateNightImg} alt='A mountain lake with text "TripFolio" the splash page for a website' />
            </Link>
          </div>
          <div className='row flexContainerRow'>
            <Link to='/projects/tic-tac-toe' className='projectTile'>
              <img src={ticTacToeImg} alt='Tic Tac Toe board with blue background' />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
