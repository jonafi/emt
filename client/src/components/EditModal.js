import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import { Button, Modal, Form, Col, Row } from 'react-bootstrap';
import API from '../utils/API';

function EditModal() {
    // MODAL CONSTS
    const [show, setShow] = useState(false);
      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // END OF MODAL CONSTS

    //AUTH0 AND LOAD USER DATA
    const { user, isAuthenticated } = useAuth0();
    const [data, setData] = useState([]);
    const [personal_email, setEmail] = useState([]);

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
          // console.log(result.data)
        })
        .catch(err => console.log(err));}
      
    function loadRole(user) {
      API.getUser(user)
        .then(result => {
          setEmail(result.data.personal_email);
          // console.log(result.data.personal_email)
        })
        .catch(err => console.log(err));
    }
    // END OF AUTH0 AND LOAD DATA

        // all data for new user
    const [department, updateDepartment] = useState("");
    const [role, updateRole] = useState("");
    const [email, updateEmail] = useState("");
    const [active, updateActive] = useState("Active");
    const [firstName, updateFirstName] = useState("");
    const [middleInitial, updateMiddleInitial] = useState("");
    const [lastName, updateLastName] = useState("");
    const [address, updateAddress] = useState("");
    const [addressTwo, updateAddressTwo] = useState("");
    const [city, updateCity] = useState("");
    const [usState, updateUSState] = useState("");
    const [zip, updateZip] = useState("");
    const [phoneNum, updatePhoneNum] = useState("");
    const [gender, updateGender] = useState("F");
    const [birthDate, updateBirthDate] = useState("");
    const [hireDate, updateHireDate] = useState("");

    //
    function handleOnSubmit (event) {
        event.preventDefault();
      
        API.updateEmployee({
            "address_line1": address,
            "address_line2": addressTwo,
            "city": city,
            "state": usState,
            "zip": zip,
            "primary_phone": phoneNum,
            "personal_email": user.email,
        })
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }
      
        return (
          <>
            <Button variant="outline-secondary" onClick={handleShow} className="editBtn">Edit Info</Button>{' '}
            
            <Modal show={show} onHide={handleClose}>
              {loadRole(user.email)}
              {(personal_email === user.email)
              ? <>
                {data.filter(person=> person.personal_email === user.email).map(filteredPerson => (
                 <>
                 <Form className="w-75 mx-auto mt-4" onSubmit={handleOnSubmit}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <p>Please Input For All Values Below</p>

                      <Form.Group controlId="add">
                        <Form.Label>Address Line 1</Form.Label>
                        <Form.Control type="text" placeholder={filteredPerson.address_line1} onChange={e => updateAddress(e.target.value)} />
                      </Form.Group>

                      <Form.Group controlId="add">
                        <Form.Label>Address Line 2</Form.Label>
                        <Form.Control type="text" placeholder={filteredPerson.address_line2} onChange={e => updateAddressTwo(e.target.value)} />
                      </Form.Group>

                      <Form.Row>
                            <Form.Group as={Col} controlId="add">
                                <Form.Label>City</Form.Label>
                            <Form.Control placeholder={filteredPerson.city} onChange={e => updateCity(e.target.value)}/>
                            </Form.Group>

                                <Form.Group as={Col} controlId="add">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control placeholder={filteredPerson.state} onChange={e => updateUSState(e.target.value)} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="add">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control placeholder={filteredPerson.zip} onChange={e => updateZip(e.target.value)} />
                                </Form.Group>
                      </Form.Row>

                      <Form.Group controlId="add">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder={filteredPerson.primary_phone} onChange={e => updatePhoneNum(e.target.value)} />
                      </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                      <Button as="input" className="addUserbutton mt-4 mb-4" size="lg" type="submit" value="Save Changes" onClick={handleClose} variant="primary"/>{' '}
                    </Modal.Footer>
                  </Form>
                 </>
                ))}
                </>
                : <>
                  <p>Unauthorized To Edit. Contact Support</p>
                  <Button onClick={handleClose}> Close </Button>
                  </>
            }
            </Modal>
          </>
        );
}

export default EditModal;
