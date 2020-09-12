import React, { useState, useEffect, useRef } from 'react';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';
import {Container, Row, Col, Form, Button, InputGroup, FormControl} from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'
import API from "../utils/API";
import ChatMessages from '../components/ChatMessages';

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:3002";


function Chatbox () {

  const { isLoading } = useAuth0();
  if (isLoading) return <div>...</div>; //prevents seeing wrong button

  const { user, isAuthenticated } = useAuth0();

  const [username, setUsername] = useState("");
  const [response, setResponse] = useState("");

  const DUMMY_DATA = [
    {
      username: 'perborgen',
      text: "Hey hows it going?"
    },
    {
      username: 'janedoe',
      text: "Great! How about you?"
    },
    {
      username: 'perborgen',
      text: "Good to hear! I am great as well"
    },
  ];

  const [newMsg, setNewMsg] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    // connect to socket.io
    socketRef.current = socket.connect('/');

    // // get your id (working)
    // socketRef.current.on("id", id => {
    //   setUsername(id);
    // });

    setUsername(id);
    // loadRole(user);
    // listens for any changes to message
    socketRef.current.on("chat message", (message) => {
      console.log("here");
      console.log("message: ", message);
    })

    return () => socket.disconnect();

    }, []);

  function handleOnSubmit (e) {
    e.preventDefault();
    console.log(response);
    let data = {
      username: username,
      text: response
    };

    console.log(data);

    // data sent to socket.io
    socketRef.current.emit("chat message", data);

    // gets the change, then displays it in the chat
    listeningNewMessages();

    

    
  };

  function listeningNewMessages () {
    socketRef.current.on("message", (msg) => {
      

      setNewMsg([...newMsg, msg]);
      console.log(newMsg);
    })
  }

  function loadRole(user) {
    API.getUser(user)
      .then(result => {
        setUsername(result.data.personal_email);
        // console.log(result.data.personal_email)
      })
      .catch(err => console.log(err));
  }

  

  return (
    <div>
    <Nav/>
    <Container className="Chatbox">
      <Row>
        <Col>
        {DUMMY_DATA.map((message, index) => (
          <ChatMessages key={index} username={message.username} text={message.text}/>
        ))}
        {newMsg.map((message, index) => (
          <ChatMessages key={index} username={message.username} text={message.text}/>
        ))}

          <Form onSubmit={handleOnSubmit}>

            <InputGroup className="mb-3" onChange={e => setResponse(e.target.value)}  >
              <FormControl aria-describedby="basic-addon1" />
              <InputGroup.Prepend>
                <Button variant="outline-secondary" type="submit">Send</Button>
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