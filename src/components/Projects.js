import React, {Component} from 'react';
import danceFinder from '../../public/images/dance-finder.jpg';
import dateNight from '../../public/images/date-night.jpg';
import austinReferral from '../../public/images/austin-referral.jpg';
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
            <div className='column'>
              {/*<h5>Dance Finder</h5>*/}
                <a href='https://clrksanford.github.io/dance-finder' target='_blank'>
                  <img src={danceFinder}/>
                </a>
                {/*<a href='https://github.com/clrksanford/dance-finder'  target='_blank'>GitHub Link</a>*/}
            </div>
            <div className='column'>
              {/*<h5>Date Night</h5>*/}
                <a href='https://clrksanford.github.io/date-night' target='_blank'>
                  <img src={dateNight}/>
                </a>
                {/*<a href='https://github.com/clrksanford/date-night'  target='_blank'>GitHub Link</a>*/}
            </div>
          </div>
          <div className='pageHeader'>
            <h3>Design Comp Practice</h3>
          </div>
          <div className='row'>
            <div className='column'>
              <h5>Austin Referral Page</h5>
              <img src={austinReferral}/>
            </div>
            <div className='column'>
              <h5>Relaxr</h5>
              <img src={relaxr}/>
            </div>
          </div>
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
