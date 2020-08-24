import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

function Sample() {
  const { isAuthenticated } = useAuth0(); 
  const [data, setData] = useState([]);
 
  useEffect(async () => {
    const result = await axios('/api/sample');
     setData(result.data);
  },[]);
 
  return (

    
    isAuthenticated && (

    <ul>
      {data.map(item => (
        <li key={item.id}>
          <p>{item.info}</p>
        </li>
      ))}
    </ul>
  )
  );
}
 
export default Sample;