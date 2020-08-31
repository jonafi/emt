import React from 'react';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';
import {Container, Row, Col} from 'react-bootstrap';
import Managers from '../utils/Manager';


function Directory(){
    return (
        <>
        <Nav/>
        <Container className="Directory">
            <Row>
                <Col>
                <h5>Directory</h5>
                <hr></hr>
                    <Managers/>
                </Col>
            </Row>
        </Container>
        <Footer/>
        </>
    );
};

export default Directory;