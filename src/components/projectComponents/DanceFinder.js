// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';

// Components
import ProjectButtons from '../ProjectButtons';

// Images
import danceFinder from '../../../public/images/dance-finder.jpg';

class DanceFinder extends Component {
  render() {
    return(
      <div className='pageContent scrollContainer'>
        <Link to='/projects' className='closeProject'>
          X
        </Link>
        <div className='pageHeader'>
          <h3>Dance Finder</h3>
        </div>
        <div className='row'>
          <img src={danceFinder}
            className='projectImage'
            alt='People dancing in a crowded dance hall, with large yellow text reading "Where do you want to dance?" Splash page for the site.'
          />
        </div>
        <div className='pageMain projectDescription'>
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
        </div> {/* --close pageMain-- */}
        <ProjectButtons projectName='dance-finder'/>
      </div>
    );
  }
}

export default DanceFinder;
