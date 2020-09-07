import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';


console.log(window.location.pathname)
const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        (window.location.pathname === "/" || window.location.pathname === "/Dashboard") && (
            !isAuthenticated && (
                <Button onClick={() => loginWithRedirect()}>
                    Log In
                </Button>
            )
        )
    )
}

export default LoginButton