import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import RouteTransitionShell from './components/RouteTransitionShell';

ReactDOM.render(
  <Router>
    <RouteTransitionShell />
  </Router>,

  document.getElementById('root')
);

