import React, {Component} from 'react';
import danceFinder from '../../public/images/dance-finder.jpg';
import dateNight from '../../public/images/date-night.jpg';

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
              <h4>Dance Finder</h4>
                <a href='https://clrksanford.github.io/dance-finder' target='_blank'>
                  <img src={danceFinder}/>
                </a>
                <a href='https://github.com/clrksanford/dance-finder'  target='_blank'>GitHub Link</a>
            </div>
            <div className='column'>
              <h4>Date Night</h4>
                <a href='https://clrksanford.github.io/date-night' target='_blank'>
                  <img src={dateNight}/>
                </a>
                <a href='https://github.com/clrksanford/date-night'  target='_blank'>GitHub Link</a>
            </div>
          </div>
          <div className='row'>
            <div className='column'>
            </div>
            <div className='column'>
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
