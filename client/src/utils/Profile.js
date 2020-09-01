import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const {user, isAuthenticated } = useAuth0();
  const [data, setData] = useState([]);

  let employeeSelector = 1;  //change this to a prop drill

  useEffect(async () => {
    const result = await axios('/api/employee/'+ employeeSelector);
    setData(result.data);
  }, []);

  return (
    <div>
      {isAuthenticated && (
        <ul>
  
            <li key={data.id}>
              <span>{data.first_name}</span>&nbsp;
              <span>{data.last_name}</span>
            </li>
       
        </ul>
      )}
    </div>

  );
}

export default Profile;