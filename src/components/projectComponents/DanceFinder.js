import React, {Component} from 'react';
import danceFinder from '../../../public/images/dance-finder.jpg';

class DanceFinder extends Component {
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
          id='danceFinder'
          onMouseOver={this._handleMouseOver}
          onMouseOut={this._handeMouseOut}>
        <div className={`projectTileInner ${this.state.class}`}> */}
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
