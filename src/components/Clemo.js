import React, {Component} from 'react';

class Clemo extends Component {
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
      <div className='projectTile'
        id='clemo'
        onMouseOver={this._handleMouseOver}
        onMouseOut={this._handeMouseOut}>
        <div className={`projectTileInner ${this.state.class}`}>
          <h5>Clemo</h5>
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
        </div> {/* --close projectTileInner-- */}
      </div>
    );
  }
}

export default Clemo;
