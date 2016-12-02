import React, {Component} from 'react';
import relaxr from '../../../public/images/relaxr.jpg';

class Relaxr extends Component {
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
        class: 'flexContainerColumn'
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
      {/* <div className='projectTile'
        id='relaxr'
        onMouseOver={this._handleMouseOver}
        onMouseOut={this._handeMouseOut}>
        <div className={`projectTileInner ${this.state.class}`}> */}
          <h3>Relaxr</h3>
        </div>
        <div className='pageMain'>
          <img src={relaxr} className='projectImage' />
          <p>HTML & CSS mock-up based on design comp and assets. Resources provided by General Assembly Austin.</p>
          <div className='buttonContainer'>
            <a href='https://clrksanford.github.io/ga-relaxr/'
              className='button projectLink'
              target='_blank'>
              See the site
            </a>
            <a href='https://github.com/clrksanford/ga-relaxr'
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

export default Relaxr;
