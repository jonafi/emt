import React, { useState,useEffect } from 'react';
import LoggedUser from '../components/LoggedUser';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';
import { useAuth0 } from '@auth0/auth0-react'
import {Col, Container, Row, Button} from 'react-bootstrap';
import Database from '../components/Database';
import API from '../utils/API';

import Profile from '../utils/Profile';

function Performance(props) {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>...</div>; //prevents seeing wrong button

  const { user, isAuthenticated } = useAuth0();
  const [data, setData] = useState([]);
  const [personal_email, setEmail] = useState([]);

  useEffect(() => {
    loadEmployeePerformance();
  }, []);

  useEffect(() => {
    loadRole();
  }, []);

  function loadEmployeePerformance() {
    API.getEmployeePerformance()
      .then(result => {
        setData(result.data);
        console.log(result.data)
      })
      .catch(err => console.log(err));
  }

  function loadRole(user) {
    API.getUser(user)
      .then(result => {
        setEmail(result.data.personal_email);
        console.log(result.data.personal_email)
      })
      .catch(err => console.log(err));
  }
  

  return (
    <>
    <Nav/>
    <Container className="intro">
        <Row><h4>Employee Performance</h4></Row>
        <EmployeePerformance/>
    </Container>
    <Footer/>
    </>
  );
}

export default Performance;
