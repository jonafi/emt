import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'



function AddUser(){
    return (
        <>
        <Container className="AddUser">
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId ="add">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type = "email" placeholder="name@example.com"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type = "text" placeholder="First Name"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type = "text" placeholder="Last Name"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type = "text" placeholder="123 Street"></Form.Control>
                        </Form.Group>
                        <Button as="input" type="submit" value="Submit" />{' '}
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default AddUser;