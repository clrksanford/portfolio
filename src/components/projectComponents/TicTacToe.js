// Modules
import React, {Component} from 'react';
import { Link } from 'react-router';

// Components
import ProjectButtons from '../ProjectButtons';

// Images
import ticTacToeImg from '../../../public/images/tic-tac-toe.jpg';

class TicTacToe extends Component {
  render() {
    return(
      <div className='pageContent scrollContainer'>
        <Link to='/projects' className='closeProject'>
          X
        </Link>
        <div className='pageHeader'>
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
          <ProjectButtons projectName='tic-tac-toe' />
        </div> {/* --close pageMain-- */}
      </div>
    );
  }
}

export default TicTacToe;
