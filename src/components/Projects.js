import React, {Component} from 'react';

// Components
import DateNight from './DateNight';
import DanceFinder from './DanceFinder';
import AustinReferral from './AustinReferral';
import Relaxr from './Relaxr';

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
            <DanceFinder />
          </div> {/* --close row-- */}
          <div className='row'>
            <DateNight />
          </div> {/* --close row-- */}
          <div className='pageHeader'>
            <h3>Design Comp Practice</h3>
          </div>
          <div className='row'>
            <AustinReferral />
          </div>
          <div className='row'>
            <Relaxr />
          </div> {/* --close row-- */}
        </div>
      </div>
    );
  }
}

export default Projects;
