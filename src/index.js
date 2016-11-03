import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import './index.css';
import {Router, Route, hashHistory, browserHistory, IndexRoute} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='about' component={About}/>
      <Route path='projects' component={Projects}/>
      <Route path='resume' component={Resume}/>
      <Route path='contact' component={Contact}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
