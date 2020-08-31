import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Directory from './pages/Directory';
import AddUser from './pages/AddUser';
import './style.css';

function App() {
  return (
    <>
    <BrowserRouter>
     
      <Route exact path='/' component={Login}/>
      <Route exact path='/Dashboard' component={Dashboard}/>
      <Route exact path='/Directory' component={Directory}/>
      <Route exact path='/AddUser' component={AddUser}/>
    
    </BrowserRouter>
    </>
  );
}

export default App;