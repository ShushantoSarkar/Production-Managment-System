import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './dashboard.js';
ReactDOM.render(
    <Router>
      <switch>
        <Route path="/">
          <Dashboard />
        </Route>
        </switch>
        </Router>
, document.getElementById('root'));
