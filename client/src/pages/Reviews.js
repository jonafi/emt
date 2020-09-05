import React from 'react';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';
import {Container, Row, Col} from 'react-bootstrap';
import Reviews from '../components/EmployeeReviews';


function Reviews(){
    return (
        <>
        <Nav/>
        <Container className="Review">
            <Row>
                <Col>
                <h5>Employee Performance Reivews</h5>
                <hr></hr>
                    <EmployeeReviews/>
                </Col>
            </Row>
        </Container>
        <Footer/>
        </>
    );
};

export default Reviews;