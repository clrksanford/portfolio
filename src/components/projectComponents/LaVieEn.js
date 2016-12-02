import React, {Component} from 'react';

class LaVieEn extends Component {
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
          id='laVieEn'
          onMouseOver={this._handleMouseOver}
          onMouseOut={this._handeMouseOut}>
        <div className={`projectTileInner ${this.state.class}`}>
          <h5>La Vie En Rose</h5>
          <p>
            A very simple page that allows users to choose images and add different colored filters to them.
          </p>

          <p>
            <span className='emphasis'>Tools:</span> {' '}
            Built with HTML, CSS, and jQuery.
          </p>

          <p>
            <span className='emphasis'>Description:</span> {' '}
            This was an early personal project to practice jQuery, DOM manipulation, and CSS/styling.
          </p>
          <div className='buttonContainer'>
            <a href='https://clrksanford.github.io/la-vie-en-rose'
              className='button projectLink'
              target='_blank'>
              See the site
            </a>
            <a href='https://github.com/clrksanford/la-vie-en-rose'
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

export default LaVieEn;
