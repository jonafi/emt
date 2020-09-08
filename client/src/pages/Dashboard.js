import React, { useState,useEffect } from 'react';
import LoggedUser from '../components/LoggedUser';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';
import { useAuth0 } from '@auth0/auth0-react'
import {Col, Container, Row, Button} from 'react-bootstrap';
import Database from '../components/Database';
import API from '../utils/API';

import Profile from '../utils/Profile';

function Dashboard(props) {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>...</div>; //prevents seeing wrong button

  const { user, isAuthenticated } = useAuth0();
  const [data, setData] = useState([]);
  const [personal_email, setEmail] = useState([]);

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
        // console.log(result.data)
      })
      .catch(err => console.log(err));
  }

  function loadRole(user) {
    API.getUser(user)
      .then(result => {
        setEmail(result.data.personal_email);
        // console.log(result.data.personal_email)
      })
      .catch(err => console.log(err));
  }
  

  return (
    <>
    <Nav/>
        {isAuthenticated && (
            <>
                {loadRole(user.email)}
                {(personal_email === user.email)
                    ? <>
                        {data.filter(person => person.personal_email === user.email).map(filteredPerson => (
                             <>
                             <Container className="intro">
                                 <Row>
                                     <Col>
                                         <h5 className="bold">SIGNED IN AS</h5>
                                             <p>{filteredPerson.personal_email}</p>
                                         <h5 className="bold bmarg">Role</h5>
                                             <p>{filteredPerson.role}</p>
                                         <h5 className="bold bmarg">Status</h5>
                                             <p>{filteredPerson.status}</p>
                                     </Col>
                                         <Col xs='3'>
                                         </Col>
                                     <Col>
                                         <h5 className="bold">WELCOME</h5> 
                                             <p>{filteredPerson.first_name}</p>
                                         <h5 className="bold bmarg">Date Hired</h5>
                                             <p>{filteredPerson.hire_date}</p> 
                                         <h5 className="bold bmarge">Pay Rate </h5>
                                             <p>{filteredPerson.pay_rate}</p>
                                         <Button variant="outline-secondary" className="editBtn">Edit</Button>{' '}
                                     </Col>
                                 </Row>
                             </Container>

                             <Container>
                                 <Row className="infoRow">
                                     <Col>
                                     </Col>
                                     <Col xs="8" className="empInfo">
                                     <h5 className="bold">EMPLOYEE INFO</h5>
                                     <hr></hr>
                                        <Row>
                                            <Col>
                                            <h5 className="bold bmarg">Address</h5>
                                                <p>
                                                    {filteredPerson.address_line1} {filteredPerson.address_line2}
                                                </p>
                                                <p>
                                                    {filteredPerson.city}, {filteredPerson.state} {filteredPerson.zip}
                                                </p>
                                            </Col>
                                            <Col>
                                            <h5 className="bold bmarg">Phone Number</h5>
                                                <p>{filteredPerson.primary_phone}</p>
                                            </Col>
                                            <Col>
                                            <h5 className="bold bmarg">Work Email</h5>
                                                <p>{filteredPerson.work_email}</p> 
                                            </Col>    
                                        </Row>
                                     </Col>
                                     <Col>
                                     </Col>
                                 </Row>
                             </Container>

                             </>
                        ))}
                           
                    </>  
                    : 
                            <Container className="notAuthorized">
                                <Row>
                                    <Col>
                                    <h5> E-Mail is not authorized. Please Contact Admin/Managers for authorization.</h5>
                                    </Col>
                                </Row>
                            </Container>
                }


            </>
        )}  
       
        <Footer/>
    </>
  );
}

export default Dashboard;
