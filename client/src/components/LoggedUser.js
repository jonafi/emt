import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const LoggedUser = () => {
    const { user, isAuthenticated } = useAuth0();
    return (

        isAuthenticated && (
            <div>
                <p>{user.name /* First name & last name associated with Auth0 Account */}</p>
                <p>{user.sub/* UNIQUE id and type for users */}</p>
                <p>{user.email/* for sendmail update? */}</p>


            </div>
        )
    )

}

export default LoggedUser