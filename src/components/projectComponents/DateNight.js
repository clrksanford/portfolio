import React, {Component} from 'react';
import { Link } from 'react-router';

import dateNight from '../../../public/images/date-night.jpg';

class DateNight extends Component {
  render() {
    return(
      <div className='pageContent scrollContainer'>
        <Link to='/projects' className='closeProject'>
          X
        </Link>
        <div className='pageHeader'>
          <h3>Date Night</h3>
        </div>
        <div className='pageMain'>
          <img src={dateNight} alt='Couple sitting on the couch, their hands almost touching. Logo on top reads "Date Night." Splash page for the site.' className='projectImage'/>
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
          <div className='buttonContainer'>
            <a href='https://clrksanford.github.io/date-night'
              className='button projectLink'
              target='_blank'>
              See the site
            </a>
            <a href='https://github.com/clrksanford/date-night'
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
