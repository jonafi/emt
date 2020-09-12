import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const {isAuthenticated } = useAuth0();
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
            <li key={data.id}>
              <span>{data.role}</span>
            </li>
            <li key={data.id}>
              <span> Department : {data.department}</span>
            </li>
            <li key={data.id}>
              <span>Hired since {data.hire_date}</span>
            </li>
        </ul>
      )}
    </div>

  );
}

export default Profile;