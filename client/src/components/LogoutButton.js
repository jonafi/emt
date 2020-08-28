import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import {Button} from 'react-bootstrap';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <Button onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
            </Button>
        )
    )
}

export default LogoutButton