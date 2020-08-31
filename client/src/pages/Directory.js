import React from 'react';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';
import {Container, Row, Col} from 'react-bootstrap';



function Directory(){
    return (
        <>
        <Nav/>
        <Container className="Directory">
            <Row>
                <Col>
                <h5>Directory</h5>
                <hr></hr>
                    <ul>
                        <li>Info 1. Phone number. Store. Something Else</li>
                        <li>Info 1. Phone number. Store. Something Else</li>
                        <li>Info 1. Phone number. Store. Something Else</li>
                        <li>Info 1. Phone number. Store. Something Else</li>
                        <li>Info 1. Phone number. Store. Something Else</li>
                        <li>Info 1. Phone number. Store. Something Else</li>
                    </ul>
                </Col>
            </Row>
        </Container>
        <Footer/>
        </>
    );
};

export default Directory;