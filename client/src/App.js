import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Nav from './components/NavBar';
import Sample from './components/Sample';
import Database from './components/Database';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Login from './pages/Login';
import Directory from './pages/Directory';
import AddUser from './pages/AddUser';
import './style.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Route exact path='/' component={Dashboard}/>
      <Route exact path='/Login' component={Login}/>
      <Route exact path='/Directory' component={Directory}/>
      <Route exact path='/AddUser' component={AddUser}/>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;