import React, { useState, useEffect } from 'react';
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react'
import { Navbar } from 'react-bootstrap';
import API from '../utils/API';

function Nav() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>...</div>; //prevents seeing wrong button

  const { user, isAuthenticated } = useAuth0();
  const [data, setData] = useState([]);
  const [role, setRole] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  useEffect(() => {
    loadRole();
  }, []);

  function loadEmployees() {
    API.getEmployees()
      .then(result => {
        setData(result.data);
      })
      .catch(err => console.log(err));
  }

  function loadRole(user) {
    API.getUser(user)
      .then(result => {
        setRole(result.data.role);
        // console.log(result.data.role)
      })
      .catch(err => console.log(err));
  }


  return (
    <>
      <Navbar className="navbar">
        <Navbar.Brand href="/Dashboard" className="Hero ltgray">EMPLOYEE HERO</Navbar.Brand>
        {isAuthenticated && (
          <>
            <Navbar.Brand href="/Directory" className="ltgray">DIRECTORY</Navbar.Brand>
            <Navbar.Brand href="/Performance" className="ltgray">PERFORMANCE</Navbar.Brand>
            {loadRole(user.email)}
            {(role === 'admin')
              ? <Navbar.Brand href="/AddUser" className="ltgray">ADD USER</Navbar.Brand>
              : <p></p>
            }
          </>
        )}

          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            </Navbar.Collapse>
            <LoginButton/>
            <LogoutButton/>
      </Navbar>
      
    </>
  );
}

export default Nav;
