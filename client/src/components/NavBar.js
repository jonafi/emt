import React from 'react';
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import LoggedUser from './LoggedUser';
import { useAuth0 } from '@auth0/auth0-react'

function NavBar() {
    const { isLoading } = useAuth0();
    if (isLoading) return <div>...</div>; //prevents seeing wrong button
  
    return (
      <>
        <LoginButton />
        <LogoutButton />
        <LoggedUser />
      </>
    );
  }
  
  export default NavBar;
  