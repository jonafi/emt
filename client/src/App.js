import React from 'react';
import Nav from './components/NavBar';
import Sample from './components/Sample';
import Database from './components/Database';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <>
      <Nav/>
      <Dashboard/>
      <Footer/>
    </>
  );
}

export default App;