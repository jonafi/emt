import React, { useState, useEffect } from 'react';
import Nav from '../components/NavBar';
import { useAuth0 } from '@auth0/auth0-react'
import Footer from '../components/Footer';
import { Col, Container, Row, Table,} from 'react-bootstrap';
import API from '../utils/API';
import DirectoryTables from "../components/DirectoryTables";

function Directory() {
  const { user, isAuthenticated } = useAuth0();
  const [data, setData] = useState([]);
  const [role, setRole] = useState([]);
  
  //SEARCH FUNCTION
  const [searchTerm, setSearchTerm] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  

  // LOADS DATA
  useEffect(() => {
    loadEmployees();
    loadRole();
  }, []);

  useEffect(() => {
    
  }, []);

  function handleChange (e) {
    e.preventDefault();
    setSearchTerm(e.target.value);
    // console.log(searchTerm);
    let results = data.filter(person =>
      person.first_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchRes(results);
    console.log(searchRes);
  }

  function loadEmployees() {
    API.getEmployees()
      .then(result => {
        setData(result.data);
        setSearchRes(result.data);
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
            <h5 className="bold listTitle oswald">Directory List</h5>
            <hr className="linebreak"></hr>
            <input 
              type="text"
              placeholder = "Search By First Name"
              value={searchTerm}
              onChange={handleChange}
            />
              <Table striped border hover responsive="sm">
            <tbody>
            {isAuthenticated && (
              <>
                {loadRole(user.email)}
                {(role === "admin" || role === "Stylist" || role === "role4")
                  ? <table className="table mt-4 tborder">
                      <thead className="vanida">
                        <tr className="vanida">
                            <th className="vanida">Role</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                        </tr>
                      </thead>
                    {searchRes.map((contacts, index) => (
                      <DirectoryTables contact={contacts} in={index}/>
                    ))}
                  </table>
                  : <div></div>
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
