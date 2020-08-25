import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Sample() {
  const [data, setData] = useState([]);
 
  useEffect(async () => {
    const result = await axios('/api/sample');
     setData(result.data);
  },[]);
 
  return (
   

    <ul>
      {data.map(item => (
        <li key={item.id}>
          <p>{item.info}</p>
        </li>
      ))}
    </ul>
 
  );
}
 
export default Sample;