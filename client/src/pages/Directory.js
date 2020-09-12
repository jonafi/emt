import React, { useState, useEffect } from 'react';
import Nav from '../components/NavBar';
import { useAuth0 } from '@auth0/auth0-react'
import Footer from '../components/Footer';
import { Col, Container, Row, Table,} from 'react-bootstrap';
import API from '../utils/API';

function Directory() {
  const { user, isAuthenticated } = useAuth0();
  const [data, setData] = useState([]);
  const [role, setRole] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  useEffect(() => {
    loadRole();
  }, []);

  function loadEmployees() {
    API.getEmployees()
      .then(result => {
        setData(result.data);
      })
      .catch(err => console.log(err));
  }

  function loadRole(user) {
    API.getUser(user)
      .then(result => {
        setRole(result.data.role);
        console.log(result.data.role)
      })
      .catch(err => console.log(err));
  }


  return (
    <>
    <Nav />
      <Container>
        <Row className="infoRow">
          <Col s='12' className="empInfo">
            <h5 className="bold">Directory List</h5>
              <Table striped border hover responsive="sm">
            <tbody>
            {isAuthenticated && (
              <>
                {loadRole(user.email)}
                {(role === "admin" || role === "Stylist" || role === "role4")
                  ? <table className="table">
                    {data.map(person => (
                      <tr>
                        <td>{person.first_name}</td>
                        <td>{person.last_name}</td>
                        <td>{person.primary_phone}</td>
                        <td><a href={"mailto:" + person.personal_email}>{person.personal_email}</a></td>
                      </tr>
                    ))}
                  </table>
                  : <p></p>
                }
              </>
            )
            }
            </tbody>
          </Table>
         </Col>

        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default Directory;
