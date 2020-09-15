import React, { useState, useEffect } from 'react';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import API from "../utils/API";

function AddReview(){
   
    return (
        <>
        <Nav/>
        <Container>
            <Row><h5>Add Review</h5></Row>
        </Container>
        <Footer/>
        </>
    );
};

AddReview

export default AddReview; 

