import React from 'react';
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react'
import { Navbar } from 'react-bootstrap';

function Nav() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>...</div>; //prevents seeing wrong button

  return (
    <>
      <Navbar className="navbar">
        <Navbar.Brand href="/Dashboard" className="Hero ltgray">EMPLOYEE HERO</Navbar.Brand>
        <Navbar.Brand href="/Directory" className="ltgray">DIRECTORY</Navbar.Brand>
        <Navbar.Brand href="/AddUser" className="ltgray">ADD USER</Navbar.Brand>
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
