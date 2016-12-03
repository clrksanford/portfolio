// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';

// Components
import ProjectButtons from '../ProjectButtons';

// Images
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
          <ProjectButtons projectName='date-night' />
        </div> {/* --close pageMain-- */}
      </div>
    );
  }
}

export default DateNight;
