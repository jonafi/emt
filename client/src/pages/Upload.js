import React, { useState, useEffect } from 'react';
import Nav from '../components/NavBar';
import { useAuth0 } from '@auth0/auth0-react'
import Footer from '../components/Footer';
import { Col, Container, Row, Table,} from 'react-bootstrap';
import API from '../utils/API';

function Upload() {
  const { user, isAuthenticated } = useAuth0();
  const [data, setData] = useState([]);
  const [role, setRole] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  useEffect(() => {
    loadRole();
  }, []);

  function loadEmployees() {
    API.getEmployees()
      .then(result => {
        setData(result.data);
      })
      .catch(err => console.log(err));
  }

  function loadRole(user) {
    API.getUser(user)
      .then(result => {
        setRole(result.data.role);
        console.log(result.data.role)
      })
      .catch(err => console.log(err));
  }


  return (
    <>
    <Nav />
      <Container>
        <Row className="infoRow">
          <Col xs='12' className="empInfo">


          <form method="Post" action= "/uploadfiles" enctype="multipart/form-data">
    <input type="file" name="file"/>
    <input type="submit" name="Upload" value="Upload" />
</form>

         </Col>

        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default Upload;
