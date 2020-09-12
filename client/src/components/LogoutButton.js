import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import {Button} from 'react-bootstrap';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <Button className="Button" onClick={() => logout({ returnTo: window.location.origin })}>
                LOG OUT
            </Button>
        )
    )
}

export default LogoutButton