import React, {Component} from 'react';
import { Link } from 'react-router';

import clemoImg from '../../../public/images/clemo.jpg';

class Clemo extends Component {
  render() {
    return(
      <div className='pageContent scrollContainer'>
        <Link to='/design-comp' className='closeProject'>
          X
        </Link>
        <div className='pageHeader'>
          <h3>Clemo</h3>
        </div>
        <div className='pageMain'>
          <img src={clemoImg} className='projectImage' />
          <p>HTML & CSS mock-up based on design comp and assets. Resources provided by General Assembly Austin.</p>
          <div className='buttonContainer'>
            <a href='https://clrksanford.github.io/ga-clemo/'
              className='button projectLink'
              target='_blank'>
              See the site
            </a>
            <a href='https://github.com/clrksanford/ga-clemo'
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

export default Clemo;
