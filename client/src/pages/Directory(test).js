import React, { useState, useEffect, Component } from 'react';
import Nav from '../components/NavBar';
import { useAuth0 } from '@auth0/auth0-react'
import Footer from '../components/Footer';
import { Col, Container, Row, Table,} from 'react-bootstrap';
import API from '../utils/API';

function loadData(){
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
}

export default class Directory extends Component{

  state = {
    search: ""
  };


    

    // Renders Directory only.
    renderDirectory = contacts => {
      const { search } = this.state;
      var code = contacts.code.toLowerCase();

      loadData();

      return (
        <>
        {isAuthenticated && (
              <>
                {loadRole(user.email)}
                {(role === "admin" || role === "Stylist" || role === "role4")
                  ? <table className="table">
                    {data.map(person => (
                      <tr>
                        <td>{person.first_name}</td>
                        <td>{person.last_name}</td>
                        <td>{person.primary_phone}</td>
                        <td><a href={"mailto:" + person.personal_email}>{person.personal_email}</a></td>
                      </tr>
                    ))}
                  </table>
                  : <p></p>
                }
              </>
         )};
        </>
      )
    }; // end of renderDirectory

    onChange = e => {
      this.setState({ search: e.target.value});
    };

    render() {

      const { search } = this.state;
      const filteredContacts = data.filter(contact => {
        return contact.first_name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      }) ;

      

      return (
        <>
        <Nav />
        <Container>
          <Row className="infoRow">
            <Col xs='12' className="empInfo">
              <h5 className="bold">Directory List</h5>
                <Table striped border hover responsive="sm">
              <tbody>
              {isAuthenticated && (
                <>
                  {loadRole(user.email)}
                  {(role === "admin" || role === "Stylist" || role === "role4")
                    ? <table className="table">
                      {data.map(person => (
                        <tr>
                          <td>{person.first_name}</td>
                          <td>{person.last_name}</td>
                          <td>{person.primary_phone}</td>
                          <td><a href={"mailto:" + person.personal_email}>{person.personal_email}</a></td>
                        </tr>
                      ))}
                    </table>
                    : <p></p>
                  }
                </>
              )
              }
              </tbody>
            </Table>
          </Col>

          </Row>
        </Container>
      <Footer/>
        </>
      )
    }
  


};
