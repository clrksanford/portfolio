import React, {Component} from 'react';

// Components
import DateNight from './DateNight';
import DanceFinder from './DanceFinder';
import AustinReferral from './AustinReferral';
import Relaxr from './Relaxr';

// Images
import danceFinder from '../../public/images/dance-finder.jpg';
import dateNight from '../../public/images/date-night.jpg';
import austinReferral from '../../public/images/austin-referral-2.jpg';
import relaxr from '../../public/images/relaxr.jpg';

class Projects extends Component {
  render() {
    return(
      <div className='pageContent'>
        <div className='pageHeader'>
          <h3>Projects</h3>
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
            <div className='column'>
              <AustinReferral />
            </div> {/* --close column-- */}
            <div className='column'>
              <Relaxr />
            </div> {/* --close column-- */}
          </div> {/* --close row-- */}
          <div className='row'>
            <div className='column'>
            </div>
            <div className='column'>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
