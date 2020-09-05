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
                    <Form className="w-75 mx-auto mt-4">

                    <h1 className="mt-5 bold">Add User</h1>

                        <Form.Group controlId ="add" className="mt-5">
                            <Form.Label>Department</Form.Label>
                            <Form.Control type = "text" placeholder="Department"></Form.Control>
                        </Form.Group>

                        <Form.Group controlId ="add">
                            <Form.Label>Role</Form.Label>
                            <Form.Control type = "text" placeholder="Manager"></Form.Control>
                        </Form.Group>

                        <h6>Role Status</h6>
                       <Form.Group controlId="add">
                       <Form.Control as="select">
                        <option>Active</option>
                        <option>Inactive</option>
                        </Form.Control>
                       </Form.Group> 

                    <h3 className="mt-5 bold">Personal Information</h3>
                       <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type = "email" placeholder="name@example.com"></Form.Control>
                        </Form.Group>

                        <Form.Group controlId ="add">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type = "text" placeholder="First Name"></Form.Control>
                        </Form.Group>

                        <Form.Group controlId ="add">
                            <Form.Label>Middle Initial</Form.Label>
                            <Form.Control type = "text" placeholder="A"></Form.Control>
                        </Form.Group>

                        <Form.Group controlId ="add">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type = "text" placeholder="Last Name"></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="add">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main Sreet" />
                         </Form.Group>

                        <Form.Group controlId="add">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, Unit or Suite #" />
                         </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="add">
                                <Form.Label>City</Form.Label>
                            <Form.Control placeholder="City" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="add">
                                <Form.Label>State</Form.Label>
                            <Form.Control placeholder="State" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="add">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control placeholder="12345" />
                            </Form.Group>
                        </Form.Row>
 
                        <Form.Group controlId ="add">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control className="mb-2" type = "text" placeholder="123-456-7890"></Form.Control>
                        </Form.Group>  

                        <h6>Gender</h6>
                       <Form.Group controlId="add">
                       <Form.Control as="select">
                        <option>Female</option>
                        <option>Male</option>

                        </Form.Control>
                       </Form.Group> 
                        <Form.Group controlId ="add">
                            <Form.Label>Birth Date</Form.Label>
                            <Form.Control className="textspace" type = "text" placeholder="7/8/1980"></Form.Control>
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

