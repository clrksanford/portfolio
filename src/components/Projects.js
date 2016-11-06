import React, {Component} from 'react';
import DateNight from './DateNight';
import DanceFinder from './DanceFinder';

// Images
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
              <div className='projectTile'
                id='austinReferral'
                onMouseOver={this._handleMouseOver}
                onMouseOut={this._handeMouseOut}>
                <div className={`projectTileInner ${this.state.class}`}>
                  <h5>Austin Referral Page</h5>
                  <p>Resources and assets provided by General Assembly Austin.</p>
                  <a href='https://github.com/clrksanford/ga-austin-referral-page'
                    className='button projectLink designLink'
                    target='_blank'>
                    See the code
                  </a>
                </div> {/* --close projectTileInner-- */}
              </div> {/* --close projectTile-- */}
            </div> {/* --close column-- */}
            <div className='column'>
              <div className='projectTile'
                id='relaxr'
                onMouseOver={this._handleMouseOver}
                onMouseOut={this._handeMouseOut}>
                <div className={`projectTileInner ${this.state.class}`}>
                  <h5>Relaxr</h5>
                  <p>Resources and assets provided by General Assembly Austin.</p>
                  <a href='https://github.com/clrksanford/ga-relaxr'
                    className='button projectLink designLink'
                    target='_blank'>
                    See the code
                  </a>
                </div> {/* --close projectTileInner-- */}
              </div> {/* --close projectTile-- */}
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
