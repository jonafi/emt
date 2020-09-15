import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Directory from './pages/Directory';
import AddUser from './pages/AddUser';
<<<<<<< HEAD
import Chatbox from './pages/Chatbox'
=======
import Upload from './pages/Upload';
>>>>>>> e95d3b4055f7158c63ff457286c0bcf329153b96
import './style.css';
import './directorystyle.css';
import './performancestyle.css';
import './adduserstyle.css';
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
<<<<<<< HEAD
      <Route exact path='/Chat' component={Chatbox}/>
=======
      <Route exact path='/Upload' component={Upload}/>
>>>>>>> e95d3b4055f7158c63ff457286c0bcf329153b96
      </div>
    </Router>
    
  );
}

export default App;