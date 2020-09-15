import React, { useState, useEffect } from 'react';
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react'
import { Navbar, Nav, Row } from 'react-bootstrap';
import API from '../utils/API';

function Navigation() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>...</div>; //prevents seeing wrong button

  const { user, isAuthenticated } = useAuth0();
  const [setData] = useState([]);
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
    <Navbar className="navbar" expand="lg">
    <Navbar.Brand href="/Dashboard" className="Hero ltgray">EH</Navbar.Brand>
    <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

    {isAuthenticated && (
          <>
            <Nav.Link href="/Directory" className="ltgray text-center mt-4 mb-4">DIRECTORY</Nav.Link>
            <Nav.Link href="/Performance" className="ltgray text-center mt-4 mb-4">PERFORMANCE</Nav.Link>
            {loadRole(user.email)}
            {(role === 'admin')
              ? <Nav.Link href="/AddUser" className="ltgray text-center mt-4 mb-4">ADD USER</Nav.Link>
              : <p></p>
            }
          </>


        )}
        <Row className ="text-center">
    <LoginButton/>
    <LogoutButton/>
    </Row>
    </Navbar.Collapse>

              
  </Navbar>
  );
}

export default Navigation;
