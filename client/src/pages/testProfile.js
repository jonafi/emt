import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';



function testProfile(){
    const {user, isAuthenticated } = useAuth0();
    const [data, setData] = useState([]);
    
    let personal_email = user;

    useEffect(async () => {
        const result = await axios('/api/user/' + personal_email)
        setData(result.data);
      }, []);

    return (
        <>
         {isAuthenticated && (
        <table className="table">
          {data.map(person => (
            <tr>
              <td>{person.first_name}</td>
              <td>{person.last_name}</td>
              <td>{person.primary_phone}</td>
          <td><a href={person.personal_email}>{person.personal_email}</a></td>
            </tr>
          ))}
        </table>
      )}
        </>
    )
}


export default testProfile;

