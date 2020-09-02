import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { useAuth0 } from '@auth0/auth0-react';

function Database() {
  const { isAuthenticated } = useAuth0();
  const [data, setData] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  // every time a change happens, we make a call to get the updated employees
  function loadEmployees() {
    API.getEmployees()
      .then(result => {
        // testing and checking what is sent from Sequelize
        console.log(result.data);
        setData(result.data);
      })
      .catch(err => console.log(err));
  }

/*
  // POST
  API.postEmployee()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  // DELETE
  API.deleteEmployee()
    .then(result => {
      console.log(result);
      loadEmployees();
    })
    .catch(err => console.log(err));

  API.updateEmployee()
    .then(result => {
      console.log(result);
      loadEmployees();
    })
    .catch(err => console.log(err));
*/

  return (
    <div>
      <h1>DB info below</h1>
      {isAuthenticated && (
        <ul>
          {data.map(person => (
            <li>
              <span>{person.first_name}</span>&nbsp;
              <span>{person.last_name}</span>
            </li>
          ))}
        </ul>
      )}

    </div>

  );
}

export default Database;