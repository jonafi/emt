import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Nav } from 'react-bootstrap';


console.log(window.location.pathname)
const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        (window.location.pathname === "/" || window.location.pathname === "/Dashboard") && (
            !isAuthenticated && (
                <Nav.Link className="Button text-center header oswald" onClick={() => loginWithRedirect()}>
                    LOGIN 
                </Nav.Link>
            )
        )
    )
}

export default LoginButton