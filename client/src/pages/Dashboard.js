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
        console.log(result.data)
      })
      .catch(err => console.log(err));
  }

  function loadRole(user) {
    API.getUser(user)
      .then(result => {
        setEmail(result.data.personal_email);
        console.log(result.data.personal_email)
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
                            {data.map(person => (
                                <>
                                <Container className="intro">
                                    <Row>
                                        <Col>
                                            <h5 className="bold">SIGNED IN AS</h5>
                                                <p>{person.personal_email}</p>
                                            <h5 className="bold bmarg">Role</h5>
                                                <p>{person.role}</p>
                                            <h5 className="bold bmarg">Status</h5>
                                                <p>{person.status}</p>
                                        </Col>
                                            <Col xs='3'>
                                            </Col>
                                        <Col>
                                            <h5 className="bold">WELCOME</h5> 
                                                <p>{person.first_name}</p>
                                            <h5 className="bold bmarg">Date Hired</h5>
                                                <p>{person.hire_date}</p> 
                                            <Button variant="outline-secondary" className="editBtn">Edit</Button>{' '}
                                        </Col>
                                    </Row>
                                </Container>

                                <Container>
                                    <Row className="infoRow">
                                        <Col xs='5' className="empInfo">
                                            <h5 className="bold">EMPLOYEE INFO</h5>
                                            <hr></hr>
                                            <h5 className="bold bmarg">Address</h5>
                                                <p>
                                                    {person.address_line1} {person.address_line2}
                                                </p>
                                                <p>
                                                    {person.city}, {person.state} {person.zip}
                                                </p>
                                            <h5 className="bold bmarg">Phone Number</h5>
                                                <p>{person.primary_phone}</p>
                                            <h5 className="bold bmarg">Work Email</h5>
                                                <p>{person.work_email}</p>     
                                        </Col>
                                        <Col xs="1" className="This is blank">
                                        </Col>
                                        <Col xs='6' className="goals">
                                            <h5 className="bold">Performance Review</h5>
                                                <hr></hr>
                                                <ul>
                                                    <li>Goal</li>
                                                    <li>thing 1</li>
                                                    <li>thing 2</li>
                                                    <li>thing 3</li>
                                                </ul>
                                        </Col>
                                    </Row>
                                </Container>

                                </>
                            ))}
                    </>  
                    : <h5>Access Denied</h5>
                }


            </>
        )}  
       
        <Footer/>
    </>
  );
}

export default Dashboard;
