import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="pageContainer">
        <header>
          <nav>
            <Link to='/about' className='link'>About</Link>
            <Link to='/projects' className='link'>Projects</Link>
            <div>
              <h2><IndexLink to='/'>Clark Codes</IndexLink></h2>
              <ul>
                <li>
                  <a href='https://linkedin.com/in/clrksanford' target='_blank'>
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href='https://github.com/clrksanford' target='_blank'>
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/clrksanford' target='_blank'>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href='https://medium.com/@clrksanford' target='_blank'>
                    <i className="fa fa-medium" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <Link to='/resume' className='link'>Resume</Link>
            <Link to='/contact' className='link'>Contact</Link>
          </nav>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
