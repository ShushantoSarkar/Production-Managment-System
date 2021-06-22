import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './login.js';
import Sign from './sign_in.js';
import Dashboard from './dashboard.js';
import Report from './report.js';
import Update_data from './update_data.js';
ReactDOM.render(
    <Router>
      <switch>
        <Route path="/" exact component={() => <Login />} />
        <Route path="/sign_up" exact component={() => <Sign />} />
        <Route path="/dashboard" exact component={() => <Dashboard />} />
        <Route path="/report" exact component={() => <Report />} />
        <Route path="/Update" exact component={()=> <Update_data />} />
        </switch>
        </Router>
, document.getElementById('root'));
