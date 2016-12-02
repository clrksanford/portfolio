import React, {Component} from 'react';

import ticTacToeImg from '../../../public/images/tic-tac-toe.jpg';

class TicTacToe extends Component {
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
      {/* // <div className='projectTile'
      //     id='ticTacToe'
      //     onMouseOver={this._handleMouseOver}
      //     onMouseOut={this._handeMouseOut}>
      //   <div className={`projectTileInner ${this.state.class}`}> */}
          <h3>Tic Tac Toe</h3>
        </div>
        <div className='pageMain'>
          <img src={ticTacToeImg} alt='Tic Tac Toe board with blue background' className='projectImage'/>
          <p>
            A visually-pleasing twist on an age-old classic.
          </p>

          <p>
            <span className='emphasis'>Tools:</span> {' '}
            Built with HTML, CSS, and jQuery.
          </p>

          <p>
            <span className='emphasis'>Description:</span> {' '}
            This was our first individual project at General Assembly, with the goal of practicing jQuery, DOM manipulation, and mapping complex business logic.
          </p>
          <div className='buttonContainer'>
            <a href='https://clrksanford.github.io/tic-tac-toe'
              className='button projectLink'
              target='_blank'>
              See the site
            </a>
            <a href='https://github.com/clrksanford/tic-tac-toe'
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

export default TicTacToe;
