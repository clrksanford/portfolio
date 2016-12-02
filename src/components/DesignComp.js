import React, {Component} from 'react';
import { Link } from 'react-router';

// Components
import AustinReferral from './projectComponents/AustinReferral';
import Clemo from './projectComponents/Clemo';
import Relaxr from './projectComponents/Relaxr';
// import ProjectTile from './ProjectTile';
// import ProjectButtons from './ProjectButtons';

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
              <img src={clemoImg} />
            </Link>
            <Link to='/design-comp/austin-referral' className='projectTile'>
              <img src={austinReferralImg} />
            </Link>
          </div>
          <div className='row flexContainerRow'>
            <Link to='/design-comp/relaxr' className='projectTile'>
              <img src={relaxrImg} />
            </Link>
          </div>
        </div>
            {/* <ProjectTile id='tripFolio'>
              <h5>TripFolio</h5>
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
              <ProjectButtons
                codeLink='https://clrksanford.github.io/tripfolio' siteLink='https://github.com/clrksanford/tripfolio'
              />
            </ProjectTile>
          </div>
          <div className='row'>
            <ProjectTile id='danceFinder'>
              <h5>Dance Finder</h5>
              <p>
              A page created to synthesize information about community dances happening across the country.
              </p>
              <p>
              <span className='emphasis'>Tools:</span> {' '}
              Built with MongoDB, Express, and Node.js.
              </p>
              <p>
              <span className='emphasis'>Description:</span> {' '}
              This was my first experience scraping websites and seeding a database.
              </p>
              <ProjectButtons
                codeLink='https://clrksanford.github.io/dance-finder' siteLink='https://github.com/clrksanford/dance-finder'
              />
            </ProjectTile>
          </div>
          <div className='row'>
            <ProjectTile id='dateNight'>
              <h5>Date Night</h5>
              <p>
                A CRUD app created to help users plan a "date night" by offering recipe and movie recommendations which the users can then save and customize.
              </p>

              <p>
                <span className='emphasis'>Tools:</span> {' '}
                Built with MongoDB, Express, and Node.js.
              </p>

              <p>
                <span className='emphasis'>Description:</span> {' '}
                This was our first group project at General Assembly and was built over the course of 5 days.
              </p>
              <ProjectButtons
                codeLink='https://clrksanford.github.io/date-night' siteLink='https://github.com/clrksanford/date-night'
              />
            </ProjectTile>
          </div>
          <div className='row'>
            <ProjectTile id='ticTacToe'>
              <h5>Tic Tac Toe</h5>
              <p>
                A visually-pleasing twist on an age-old classic.
              </p>
              <p>
                <span className='emphasis'>Tools:</span> {' '}
                Built with HTML, CSS, and jQuery.
              </p>
              <p>
                <span className='emphasis'>Description:</span> {' '}
                This was our first individual project at General Assembly, with the goal of practicing jQuery, DOM manipulation, and mapping complex business logic.
              </p>
              <ProjectButtons
                codeLink='https://clrksanford.github.io/ga-clemo' siteLink='https://github.com/clrksanford/ga-clemo'
              />
            </ProjectTile>
          </div>
        </div>
        <div className='pageHeader'>
          <h3>Design Comp Practice</h3>
        </div>
        <div className='pageMain'>
          <div className='row'>
            <ProjectTile id='clemo'>
              <h5>Clemo</h5>
              <p>HTML & CSS mock-up based on design comp and assets. Resources provided by General Assembly Austin.</p>
              <ProjectButtons
                codeLink='https://clrksanford.github.io/ga-clemo' siteLink='https://github.com/clrksanford/ga-clemo'
              />
            </ProjectTile>
          </div>
          <div className='row'>
            <ProjectTile id='austinReferral'>
              <h5>Austin Referral Page</h5>
              <p>HTML & CSS mock-up based on design comp and assets. Resources provided by General Assembly Austin.</p>
              <ProjectButtons
                codeLink='https://clrksanford.github.io/ga-austin-referral-page' siteLink='https://github.com/clrksanford/ga-austin-referral-page'
              />
            </ProjectTile>
          </div>
          <div className='row'>
            <ProjectTile id='relaxr'>
              <h5>Relaxr</h5>
              <p>HTML & CSS mock-up based on design comp and assets. Resources provided by General Assembly Austin.</p>
              <ProjectButtons
                codeLink='https://clrksanford.github.io/ga-relaxr' siteLink='https://github.com/clrksanford/ga-relaxr'
              />
            </ProjectTile>
          </div> */}
      </div>
    );
  }
}

export default Projects;
