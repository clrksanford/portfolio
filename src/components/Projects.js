import React, {Component} from 'react';
import danceFinder from '../../public/images/dance-finder.jpg';
import dateNight from '../../public/images/date-night.jpg';
import austinReferral from '../../public/images/austin-referral-2.jpg';
import relaxr from '../../public/images/relaxr.jpg';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: 'hidden'
    }

    this._handleMouseOver = this._handleMouseOver.bind(this);
    this._handeMouseOut = this._handeMouseOut.bind(this);
  }

  _handleMouseOver() {
      this.setState({
        class: ''
      });
  }

  _handeMouseOut() {
    this.setState({
      class: 'hidden'
    })
  }

  render() {
    return(
      <div className='pageContent'>
        <div className='pageHeader'>
          <h3>Projects</h3>
        </div>
        <div className='pageMain'>
          <div className='row'>
            <div className='projectTile'
                id='danceFinder'
                onMouseOver={this._handleMouseOver}
                onMouseOut={this._handeMouseOut}>
              <div className={`projectTileInner ${this.state.class}`}>
                <h5>Dance Finder</h5>
                <p>
                A page created to synthesize information about community dances happening across the country.
                </p>
                <p>
                <span className='projectEmphasis'>Tools:</span> {' '}
                Built with MongoDB, Express, and Node.js.
                </p>
                <p>
                <span className='projectEmphasis'>Description:</span> {' '}
                This was my first experience scraping websites and seeding a database.
                </p>
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
              </div> {/* --close projectTileInner-- */}
            </div> {/* --close projectTile-- */}
          </div> {/* --close row-- */}
          <div className='row'>
            <div className='projectTile'
                id='dateNight'
                onMouseOver={this._handleMouseOver}
                onMouseOut={this._handeMouseOut}>
              <div className={`projectTileInner ${this.state.class}`}>
                <h5>Date Night</h5>
                <p>
                  A CRUD app created to help users plan a "date night" by offering recipe and movie recommendations which the users can then save and customize.
                </p>

                <p>
                  <span className='projectEmphasis'>Tools:</span> {' '}
                  Built with MongoDB, Express, and Node.js.
                </p>

                <p>
                  <span className='projectEmphasis'>Description:</span> {' '}
                  This was our first group project at General Assembly and was built over the course of 5 days.
                </p>
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
              </div> {/* --close projectTileInner-- */}
            </div> {/* --close projectTile-- */}
          </div> {/* --close row-- */}
          <div className='pageHeader'>
            <h3>Design Comp Practice</h3>
          </div>
          <div className='row'>
            <div className='column'>
              <img src={austinReferral} className='designCompPic' alt='Austin Referral Page design comp'/>
            </div>
            <div className='column'>
              <img src={relaxr} className='designCompPic' alt='Relxar design comp'/>
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
