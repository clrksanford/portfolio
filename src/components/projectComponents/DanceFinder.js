import React, {Component} from 'react';
import { Link } from 'react-router';

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
        <div className='pageMain'>
          <img src={danceFinder} alt='People dancing in a crowded dance hall, with large yellow text reading "Where do you want to dance?" Splash page for the site.' className='projectImage' />
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
          <div className='buttonContainer'>
            <a href='https://clrksanford.github.io/dance-finder'
              className='button projectLink'
              target='_blank'>
              See the site
            </a>
            <a href='https://github.com/clrksanford/dance-finder'
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

export default DanceFinder;
