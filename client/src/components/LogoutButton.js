import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import {Nav} from 'react-bootstrap';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <Nav.Link className="Button header" onClick={() => logout({ returnTo: window.location.origin })}>
                LOG OUT TEST
            </Nav.Link>
        )
    )
}

export default LogoutButton