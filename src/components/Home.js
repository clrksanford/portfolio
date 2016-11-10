import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import headshot from '../../public/images/headshot.jpg';

class Home extends Component {
  render() {
    return(
      <div className="pageContent">
        <div className='pageHeader'>
          <h1>Portfolio of Clark Sanford</h1>
          <h2 id='homeSubtitle' className='fadeIn'>Full-Stack Web Developer Based in Austin, TX</h2>
        </div>
        <div className='row clearfix' id='aboutContainer'>
          <img src={headshot} alt='headshot' id='headshot'/>
          <div id='aboutParagraph'>
          <ReactCSSTransitionGroup
           transitionName="first"
           transitionAppear={true}
           transitionAppearTimeout={2000}
           transitionEnter={false}
           transitionLeave={false}>
           <p id='p1'>Literature major, world traveler</p>
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
           transitionName="second"
           transitionAppear={true}
           transitionAppearTimeout={2000}
           transitionEnter={false}
           transitionLeave={false}>
           <p id='p2'>Highly independent critical thinker</p>
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
           transitionName="third"
           transitionAppear={true}
           transitionAppearTimeout={2000}
           transitionEnter={false}
           transitionLeave={false}>
           <p id='p3'>Process-oriented and creative</p>
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
           transitionName="fourth"
           transitionAppear={true}
           transitionAppearTimeout={2000}
           transitionEnter={false}
           transitionLeave={false}>
           <p id='p4'>Excellent communicator</p>
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
           transitionName="last"
           transitionAppear={true}
           transitionAppearTimeout={2000}
           transitionEnter={false}
           transitionLeave={false}>
           <p id='p5'>Innovative problem solver</p>
          </ReactCSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
