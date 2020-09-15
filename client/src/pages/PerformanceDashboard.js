import React, { useState,useEffect } from 'react';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';
import PerformanceReview from '../components/PerformanceReview';
import { useAuth0 } from '@auth0/auth0-react'
import {Container} from 'react-bootstrap';
import API from '../utils/API';

function PerformanceDashboard(props) {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>...</div>; //prevents seeing wrong button
  const { user, isAuthenticated } = useAuth0();
  const [data, setData] = useState([]);
  
  useEffect(async () => {
    loadEmployeeHeader();
 }, []);

 function loadEmployeeHeader() {
     API.getUser(user.email)
       .then(result => {
         setData(result.data);
         console.log(result.data)
       })
       .catch(err => console.log(err));
   }

  return (
    <>
    <Nav/>
    {isAuthenticated && (
      <>
        <Container className="intro">
            <div>
                <h4>Performance reviews for {data.first_name} {data.last_name}, {data.role}</h4>
                <br></br>
            </div> 
            <PerformanceReview/>
        </Container>
      </>
    )} 
    <Footer/>
    </>
  );
}

export default PerformanceDashboard;
