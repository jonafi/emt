import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Directory from './pages/Directory';
import AddUser from './pages/AddUser';
import Contact from './pages/Contact';
import testProfile from './pages/testProfile';
import './style.css';

function App() {
  return (
    <>
    <BrowserRouter>
     
      <Route exact path='/' component={Dashboard}/>
      <Route exact path='/Dashboard' component={Dashboard}/>
      <Route exact path='/Directory' component={Directory}/>
      <Route exact path='/AddUser' component={AddUser}/>
      <Route exact path='/Contact' component={Contact}/>
      <Route exact path='/testProfile' component={testProfile}/>
    </BrowserRouter>
    </>
  );
}

export default App;