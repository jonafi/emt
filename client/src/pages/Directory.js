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
  
  //SEARCH FUNCTION
  const [searchTerm, setSearchTerm] = useState("");
  const [searchRes, setSearchRes] = useState("");
  const handleChange = e => {
    setSearchTerm(e.target.value); 
  }

  //Used for search filter
  useEffect(() => {
    const results = data.filter(person =>
      person.first_name.toLowerCase().includes(searchTerm)
      );
      setSearchRes(results);
  }, [searchTerm]);

  // LOADS DATA
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
  // END OF LOAD DATA
  

  return (
    <>
    <Nav />
      <Container>
        <Row className="infoRow">
          <Col s='12' className="directory">
            <h5 className="bold listTitle">Directory List</h5>
            <input
              type="text"
              placeholder = "Search By First Name"
              value={searchTerm}
              onChange={handleChange}
            />
            <hr className="linebreak"></hr>
              <Table striped border hover responsive="sm">
            <tbody>
            {isAuthenticated && (
              <>
                {loadRole(user.email)}
                {(role === "admin" || role === "Stylist" || role === "role4")
                  ? <table className="table">
                    {searchRes.map(contacts => (
                      <tr>
                        <td>{contacts.role}</td>
                        <td>{contacts.first_name}</td>
                        <td>{contacts.last_name}</td>
                        <td>{contacts.primary_phone}</td>
                        <td><a href={"mailto:" + contacts.personal_email}>{contacts.personal_email}</a></td>
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
