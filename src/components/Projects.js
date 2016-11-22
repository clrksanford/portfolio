import React, {Component} from 'react';

// Components
import ProjectTile from './ProjectTile';
import ProjectButtons from './ProjectButtons';
// import DateNight from './DateNight';
// import DanceFinder from './DanceFinder';
// import LaVieEn from './LaVieEn';
// import TicTacToe from './TicTacToe';
// import AustinReferral from './AustinReferral';
// import Relaxr from './Relaxr';
// import Clemo from './Clemo';

class Projects extends Component {
  render() {
    return(
      <div className='pageContent'>
        <div className='pageHeader'>
          <h3 id='projectHeadline'>Projects</h3>
          <h4 id='projectSubtitle'>Hover over the tiles for more information</h4>
        </div>
        <div className='pageMain'>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
