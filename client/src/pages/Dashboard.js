import React from 'react';
import LoggedUser from '../components/LoggedUser';
import { useAuth0 } from '@auth0/auth0-react'
import {Col, Container, Row} from 'react-bootstrap';
import Database from '../components/Database';

function Dashboard(props) {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>...</div>; //prevents seeing wrong button

  return (
    <>
        <Container className="intro">
            <Row>
                <Col xs='2'>
                    <div className="loggedUser">
                        Signed in as : <LoggedUser/>
                    </div>
                </Col>
                <Col xs='4'>

                </Col>
                <Col xs='6'>
                    Welcome <LoggedUser/>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row className="infoRow">
                <Col xs='4' className="empInfo">
                    <h5>Employee Info</h5>
                    <hr></hr>
                    <ul>
                        <li>Role</li>
                        <li>thing 1</li>
                        <li>thing 2</li>
                        <li>thing 3</li>
                    </ul>
                </Col>
                <Col xs="4" className="This is blank">
                </Col>
                <Col xs='4' className="goals">
                <h5>Goals/Other</h5>
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
    </>
  );
}

export default Dashboard;
