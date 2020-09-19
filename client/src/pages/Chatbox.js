
import React, { useState, useEffect, useRef } from 'react';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';
import {Container, Row, Col, Form, Button, InputGroup, FormControl} from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'
import API from "../utils/API";
import ChatMessages from '../components/ChatMessages';

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:3001";


function Chatbox () {

  const { isLoading } = useAuth0();
  if (isLoading) return <div>...</div>; //prevents seeing wrong button

  const { user, isAuthenticated } = useAuth0();
  const [data, setData] = useState([]);
  const [personal_email, setEmail] = useState([]);

  const [username, setUsername] = useState("");
  const [response, setResponse] = useState("");

  function loadEmployees() {
    API.getEmployees()
      .then(result => {
        setData(result.data);
        // console.log(result.data)
      })
      .catch(err => console.log(err));
  }

  function loadRole(user) {
    API.getUser(user)
      .then(result => {
        setEmail(result.data.personal_email);
        // console.log(result.data.personal_email)
      })
      .catch(err => console.log(err));
  }

  
  const DUMMY_DATA = [
    {
      username: 'user,',
      text: "Welcome to chat!"
    }
  ];

  const [newMsg, setNewMsg] = useState([]);
  const socketRef = useRef();

  useEffect(() => {

    loadEmployees();
    loadRole(user);

    // console.log(personal_email);
    // console.log(data);
    // console.log(user);
    
    setUsername(user.nickname);
    const socket = socketIOClient();
    // connect to socket.io
    socketRef.current = socket.connect('/Chat');

    // // get your id (working)
    // socketRef.current.on("id", id => {
    //   setUsername(id);
    // });

    // loadRole(user);
    // listens for any changes to message
    // socketRef.current.on("chat message", (message) => {
    //   console.log("here");
    //   console.log("message: ", message);
    // });

    socketRef.current.on("chat message", (msg) => {
      setNewMsg(newMsg => [...newMsg, msg]);
      console.log(newMsg);
    })

    // return () => socket.disconnect();

    }, []);

  function handleOnSubmit (e) {
    e.preventDefault();
    console.log(response);
    let data = {
      username: username,
      text: response
    };

    console.log(data.username, data.text);

    // data sent to socket.io
    socketRef.current.emit("chat message", data);

    // clears input field
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    // e.target.value = "";
    // setResponse();

    // // gets the change, then displays it in the chat
    // listeningNewMessages();
  };

  

  return (
    <div>
      <Nav/>
      {isAuthenticated && (
            <>
              {loadRole(user.email)}
              {(personal_email === user.email)
                ? <>
                    <Container className="Chatbox">
                      <Row>
                        <Col xs="2"></Col>
                        <Col xs="8" className="chatdiv">
                          <div className ="messages">
                        {DUMMY_DATA.map((message, index) => (
                          <ChatMessages key={index} username={message.username} text={message.text}/>
                        ))}
                        {newMsg.map((message, index) => (
                          <ChatMessages key={index} username={message.username} text={message.text}/>
                        ))}
                          </div>
                          <Form onSubmit={handleOnSubmit}>
                             
                            <InputGroup className="mb-3 messagearea" onChange={e => {setResponse(e.target.value) }}  >
                              <FormControl className="mr-3" aria-describedby="basic-addon1" />
                              <InputGroup.Prepend>
                                <Button className=" Button" variant="outline-secondary" type="submit">Send</Button>
                              </InputGroup.Prepend>
                            </InputGroup>
                            
                          </Form>

                        </Col>
                        <Col xs="2"></Col>
                      </Row>
                    </Container>
                    <Footer/>
                  </>
                    : 
                      <Container className="notAuthorized">
                        <Row>
                          <Col>
                              <h5> E-Mail is not authorized. Please Contact Admin/Managers for authorization.</h5>
                          </Col>
                        </Row>
                      </Container>
                }
            </>
        )}
    
      
    </div>
    

  );
};

export default Chatbox;

