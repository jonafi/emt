import React from 'react';
import LoggedUser from '../components/LoggedUser';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';
import { useAuth0 } from '@auth0/auth0-react'
import {Col, Container, Row, Button} from 'react-bootstrap';
import Database from '../components/Database';

import Profile from '../utils/Profile';

function Dashboard(props) {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>...</div>; //prevents seeing wrong button

  return (
    <>
    <Nav/>
        <Container className="intro">
            <Row>
                <Col xs='2'>
                    <div className="loggedUser">
                       <h5 className="bold">SIGNED IN AS</h5><LoggedUser/>
                       <h5 className="bold bmarg">Role</h5>
                       <h5 className="bold bmarg">Status</h5>
                       <h5 className="bold bmarg">Date Hired</h5>
                    </div>
                </Col>
                <Col xs='4'>

                </Col>
                <Col xs='6'>
                <h5 className="bold">WELCOME</h5> <LoggedUser/>
                <div>
                <Button variant="outline-secondary" className="editBtn">Edit</Button>{' '}
                </div>
                </Col>
            </Row>

        </Container>
        <Container>
            <Row className="infoRow">
                <Col xs='4' className="empInfo">
                    <h5 className="bold">EMPLOYEE INFO</h5>
                    <hr></hr>
                    <h5 className="bold bmarg">Address</h5>
                    <h5 className="bold bmarg">Phone Number</h5>
                    <h5 className="bold bmarg">Work Email</h5>
                    <Profile/>
                </Col>
                <Col xs="4" className="This is blank">
                </Col>
                <Col xs='4' className="goals">
                <h5 className="bold">GOALS/OTHER</h5>
                    <hr></hr>
                    <ul>
                        <li>Goal</li>
                        <li>thing 1</li>
                        <li>thing 2</li>
                        <li>thing 3</li>
                    </ul>
                </Col>
                <Database/>
            </Row>
        </Container>
        <Footer/>
    </>
  );
}

export default Dashboard;
