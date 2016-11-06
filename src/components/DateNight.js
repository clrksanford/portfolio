import React, {Component} from 'react';
import dateNight from '../../public/images/date-night.jpg';

class DateNight extends Component {
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
            <span className='emphasis'>Tools:</span> {' '}
            Built with MongoDB, Express, and Node.js.
          </p>

          <p>
            <span className='emphasis'>Description:</span> {' '}
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
      </div>
    );
  }
}

export default DateNight;
