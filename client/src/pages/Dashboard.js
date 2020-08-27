import React from 'react';
import Nav from '../components/NavBar';
import { useAuth0 } from '@auth0/auth0-react'
import {Col, Container, Row} from 'react-bootstrap';

function Dashboard() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>...</div>; //prevents seeing wrong button

  return (
    <>
        <Nav/>

        <div className="Container">
            <div className="empInfo">
                This is where employee info goes
            </div>
        </div>

        <div className="Container">
            <div>
                Goals/Other
            </div>
        </div>
    </>
  );
}

export default Dashboard;
