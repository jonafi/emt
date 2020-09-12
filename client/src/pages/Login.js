import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import LoginButton from '../components/LoginButton';

function Login(){
    return (
        <>
        <Container className='loginBox'>
            <Row>
                <Col xs='2'>
                <LoginButton/>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Login;