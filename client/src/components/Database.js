import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

function Database() {
  const { isAuthenticated } = useAuth0();
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios('/api/all');
    setData(result.data);
  }, []);

  return (
    <div>
      <h1>DB info below</h1>
      {isAuthenticated && (
        <ul>
          {data.map(item => (
            <li key={item.employee_id}>
              <h2>{item.info}</h2>
            </li>
          ))}
        </ul>
      )}
    </div>

  );
}

export default Database;