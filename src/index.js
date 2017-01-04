// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

// Components
import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';
import DesignComp from './components/DesignComp';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';

// Project components
import AustinReferral from './components/projectComponents/AustinReferral';
import Clemo from './components/projectComponents/Clemo';
import DanceFinder from './components/projectComponents/DanceFinder';
import DateNight from './components/projectComponents/DateNight';
import Relaxr from './components/projectComponents/Relaxr';
import TicTacToe from './components/projectComponents/TicTacToe';
import TripfolioGroup from './components/projectComponents/TripfolioGroup';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='about' component={About}/>
      <Route path='projects' component={Projects}/>
        <Route path='projects/dance-finder' component={DanceFinder}/>
        <Route path='projects/date-night' component={DateNight}/>
        <Route path='projects/tic-tac-toe' component={TicTacToe}/>
        <Route path='projects/tripfolio-group' component={TripfolioGroup}/>
      <Route path='design-comp' component={DesignComp}/>
        <Route path='design-comp/austin-referral'
          component={AustinReferral}/>
        <Route path='design-comp/clemo'
          component={Clemo}/>
        <Route path='design-comp/relaxr'
          component={Relaxr}/>
      <Route path='resume' component={Resume}/>
      <Route path='contact' component={Contact}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
