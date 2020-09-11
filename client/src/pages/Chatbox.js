import React, { useState, useEffect } from 'react';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';
import {Container, Row, Col, Form, Button, InputGroup, FormControl} from 'react-bootstrap'
import API from "../utils/API";
import ChatMessages from '../components/ChatMessages';

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:3002";

function Chatbox () {

  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });

    // return () => socket.disconnect();

  }, []);
  return (
    <div>
    <Nav/>
    <Container className="Chatbox">
      <Row>
        <Col>

        <ChatMessages words={response}/>

        <Form>

            <InputGroup className="mb-3">
              <FormControl aria-describedby="basic-addon1" />
              <InputGroup.Prepend>
                <Button variant="outline-secondary">Send</Button>
              </InputGroup.Prepend>
            </InputGroup>
            
          </Form>
        </Col>
      </Row>
    </Container>
    <Footer/>  
    </div>
  );
 
};

export default Chatbox;