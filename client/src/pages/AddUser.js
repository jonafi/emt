import React from 'react';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'



function AddUser(){
    return (
        <>
        <Nav/>
        <Container className="AddUser">
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId ="add">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type = "text" placeholder="First Name"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control type = "text" placeholder="Middle Name"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type = "email" placeholder="name@example.com"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type = "text" placeholder="Last Name"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add">
                            <Form.Label>Address Line 1</Form.Label>
                            <Form.Control type = "text" placeholder="123 Street"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add">
                            <Form.Label>Address Line 2</Form.Label>
                            <Form.Control type = "text" placeholder="Apt, Suite or Unit"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add">
                            <Form.Label>Primary Phone Number</Form.Label>
                            <Form.Control type = "text" placeholder="123-456-7890"></Form.Control>
                        </Form.Group>
                        <Button as="input" type="submit" value="Submit" />{' '}
                    </Form>
                    
                </Col>
            </Row>
        </Container>
        <Footer/>
        </>
    );
};

export default AddUser;