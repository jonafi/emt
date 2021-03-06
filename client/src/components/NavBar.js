import React, { useState, useEffect } from 'react';
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
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
    <Navbar.Brand href="/Dashboard" className="Hero">EH</Navbar.Brand>
    <Navbar.Toggle className="toggle" aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-end">
    <Nav>
    {isAuthenticated && (
          <>
            <Nav.Link href="/Directory" className="ltgray text-center header oswald">DIRECTORY</Nav.Link>
            <Nav.Link href="/Performance" className="ltgray text-center header oswald">PERFORMANCE</Nav.Link>
            
            {loadRole(user.email)}
            {(role === 'admin')
              ? <>
                <NavDropdown className ="text-center header ltgray oswald" title="ADD" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/AddUser" className="text-center oswald">ADD USER</NavDropdown.Item>
                <NavDropdown.Item className="text-center oswald"  href="/AddReview">ADD REVIEW</NavDropdown.Item>
                </NavDropdown>
                </>
              : <p></p>
            }
            

            <Nav.Link href="/Chat" className="ltgray text-center header oswald">CHAT</Nav.Link>
          </>
          
        )}
        </Nav>
        <LoginButton/>
        <LogoutButton/>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Navigation;