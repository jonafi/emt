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

  function handleOnSubmit (e) {
    e.preventDefault();
    socket.emit("chat message", e.target.value);
  };

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    

    // return () => socket.disconnect();

  }, []);
  return (
    <div>
    <Nav/>
    <Container className="Chatbox">
      <Row>
        <Col>

        <ChatMessages/>

        <Form>

            <InputGroup className="mb-3" onChange={e => setResponse(e.target.value)} onSubmit={handleOnSubmit}>
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