import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

function Database() {
  const { isAuthenticated } = useAuth0();
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios('/api/managers');
    setData(result.data);
  }, []);

  return (
    <div>
      <h5>Managers</h5>
      {isAuthenticated && (
        <ul>
          {data.map(person => (
            <li key={person.id}>
              <span>{person.first_name}</span>&nbsp;
              <span>{person.last_name}</span>&nbsp;
              <span>| Phone Number : {person.primary_phone}</span>&nbsp;
              <span>| E-mail : {person.work_email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>

  );
}

export default Database;