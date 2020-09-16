import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import { Button, Modal } from 'react-bootstrap';
import API from '../utils/API';

function EditModal() {
        // MODAL CONSTS
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        // END OF MODAL CONSTS

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
        console.log(
            department, 
            role, 
            email, 
            active,
            firstName,
            middleInitial,
            lastName,
            address,
            addressTwo,
            city,
            usState,
            zip,
            phoneNum,
            gender,
            birthDate,
            hireDate
        );
        API.updateEmployee({
            "department": department,
            "status": active,
            "role": role,
            "first_name": firstName,
            "middle_init": middleInitial,
            "last_name": lastName,
            "address_line1": address,
            "address_line2": addressTwo,
            "city": city,
            "state": usState,
            "zip": zip,
            "primary_phone": phoneNum,
            "personal_email": email,
            "birth_date": new Date(birthDate),
            "hire_date": new Date(hireDate),
            "gender": gender,
        })
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }
      
        return (
          <>
            <Button variant="outline-secondary" onClick={handleShow} className="editBtn">Edit Info</Button>{' '}
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Info</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
}

export default EditModal;
