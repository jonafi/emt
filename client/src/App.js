import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Directory from './pages/Directory';
import AddUser from './pages/AddUser';
import Chatbox from './pages/Chatbox'
import './style.css';
import PerformanceDashboard from './pages/PerformanceDashboard';

function App() {
  return (
    
    <Router>
      <div>
      <Route exact path='/' component={Dashboard}/>
      <Route exact path='/Dashboard' component={Dashboard}/>
      <Route exact path='/Directory' component={Directory}/>
      <Route exact path='/Performance' component={PerformanceDashboard}/>
      <Route exact path='/AddUser' component={AddUser}/>
      <Route exact path='/Chat' component={Chatbox}/>
      </div>
    </Router>
    
  );
}

export default App;