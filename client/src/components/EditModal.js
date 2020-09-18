import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Col, Row } from 'react-bootstrap';
import API from '../utils/API';

function EditModal(props) {
    // MODAL CONSTS
    const [show, setShow] = useState(false);
      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // END OF MODAL CONSTS

    const [dataState, setDataState] = useState({
      "address_line1": props.filtered.address_line1,
      "address_line2": props.filtered.address_line2,
      "city": props.filtered.city,
      "state": props.filtered.state,
      "zip": props.filtered.zip,
      "primary_phone": props.filtered.primary_phone,
      "personal_email": props.userEmail,
    });
      

    function handleChange(evt) {
      const value = evt.target.value;
      setDataState({
        ...dataState,
        [evt.target.name]: value
      });
    }

    //
    function handleOnSubmit (event) {
        // console.log(JSON.stringify(dataState))

        API.updateEmployee(dataState)
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }

          
        return (
          <>
            <Button variant="outline-secondary" onClick={handleShow} className="editBtn">Edit Info</Button>{' '}
            
            <Modal show={show} onHide={handleClose}>
              
              {(props.personalEmail === props.userEmail)
              ? <>
                
                 <>
                 <Form className="w-75 mx-auto mt-4" onSubmit={handleOnSubmit}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <p>Please Input For All Values Below</p>

                      <Form.Group controlId="add">
                        <Form.Label>Address Line 1</Form.Label>
                        <Form.Control type="text" name="address_line1" value={dataState.address_line1} onChange={handleChange} />
                      </Form.Group>

                      <Form.Group controlId="add">
                        <Form.Label>Address Line 2</Form.Label>
                        <Form.Control type="text" name="address_line2" value={dataState.address_line2} onChange={handleChange} />
                      </Form.Group>

                      <Form.Row>
                            <Form.Group as={Col} controlId="add">
                                <Form.Label>City</Form.Label>
                            <Form.Control name="city" value={dataState.city} onChange={handleChange}/>
                            </Form.Group>

                                <Form.Group as={Col} controlId="add">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control name="state" value={dataState.state} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="add">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control name="zip" value={dataState.zip} onChange={handleChange} />
                                </Form.Group>
                      </Form.Row>

                      <Form.Group controlId="add">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" name="primary_phone" value={dataState.primary_phone} onChange={handleChange} />
                      </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                      <Button as="input" className="addUserbutton mt-4 mb-4" size="lg" type="submit" value="Save Changes" onClick={handleClose} variant="primary"/>{' '}
                    </Modal.Footer>
                  </Form>
                 </>
                 
                
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
