import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import {Col, Container, Row} from 'react-bootstrap';
import API from '../utils/API';
import Database from '../components/Database';

function Contact(props) {
    const { isAuthenticated } = useAuth0();
    const [data, setData] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.getEmployees()
      .then(result => {
        // testing and checking what is sent from Sequelize
        console.log(result.data);
        setData(result.data);
      })
      .catch(err => console.log(err));
  }


  return (
    <>
        <Container>
            <Row className="infoRow">
                <Col xs='12' className="empInfo">
                    <h5>Contact List</h5>
                    
                    {isAuthenticated && (
        <table className="table">
          {data.map(person => (
            <tr>
              <td>{person.first_name}</td>
              <td>{person.last_name}</td>
              <td>{person.primary_phone}</td>
              <td>{person.personal_email}</td>
            </tr>
          ))}
        </table>
      )}

                </Col>
             
            </Row>
        </Container>
    </>
  );
}

export default Contact;
