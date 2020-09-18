import React, { useState, useEffect } from 'react';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import API from "../utils/API";



function AddUser() {
    // all data for new user
    const [department, setDepartment] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [active, setActive] = useState("Active");
    const [firstName, setFirstName] = useState("");
    const [middleInitial, setMiddleInitial] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [addressTwo, setAddressTwo] = useState("");
    const [city, setCity] = useState("");
    const [usState, setUSState] = useState("");
    const [zip, setZip] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [gender, setGender] = useState("F");
    const [birthDate, setBirthDate] = useState("");
    const [hireDate, setHireDate] = useState("");

    //
    function handleOnSubmit(event) {
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
        API.postEmployee({
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
        <Nav/>

        <Container>
            <Row>
            <Col xs='2'>
            </Col>
                <Col xs="8"  className="AddUser">
                    <Form className="w-75 mx-auto mt-4" onSubmit={handleOnSubmit}>
                    <h1 className="mt-5 bold addnew oswald">Add New Employee</h1>
                   
                    <h6 className="mt-5">Department</h6>
                    <Form.Group controlId="add">
                       <Form.Control as="select" defaultValue="select" onChange={e => setDepartment(e.target.value)} >
                        <option value="">Select Option</option>
                        <option value="Admin">Admin</option>
                        <option value="Tannerco">Tannerco</option>
                        <option value="MN117">MN117</option>
                        <option value="MN129">MN129</option>
                        <option value="MN140">MN140</option>
                        </Form.Control>
                       </Form.Group>

                       <h6>Status</h6>
                       <Form.Group controlId="add">
                       <Form.Control as="select" defaultValue="select" onChange={e => setActive(e.target.value)} >
                        <option value="select">Select Option</option>
                        <option value="Active">Active</option>
                        <option value="Terminated">Terminated</option>
                        <option value="Candidate">Candidate</option>
                        </Form.Control>
                       </Form.Group> 

                       <h6>Role</h6>
                       <Form.Group controlId="add">
                       <Form.Control as="select" defaultValue="Active" onChange={e => setRole(e.target.value)} >
                        <option value="">Select Option</option>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                        <option value="Area Mgr">Area Manager</option>
                        <option value="Sr Manager">Senior Manager</option>
                        <option value="Stylist">Stylist</option>
                        <option value="Asst Mgr">Assistant Manager</option>
                        <option value="IT">IT</option>
                        </Form.Control>
                       </Form.Group>

                       <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>Hired Date</Form.Label>
                            <Form.Control className="textspace" type = "text" placeholder="7/8/1980" onChange={e => Date(e.target.value)}></Form.Control>
                        </Form.Group>

                        <h3 className="mt-5 bold oswald">Personal Information</h3>
                       <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type = "email" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId ="add">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type = "text" placeholder="First Name" onChange={e => setFirstName(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId ="add">
                            <Form.Label>Middle Initial</Form.Label>
                            <Form.Control type = "text" placeholder="A" onChange={e => setMiddleInitial(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId ="add">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type = "text" placeholder="Last Name" onChange={e => setLastName(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="add">
                            <Form.Label>Address Line 1</Form.Label>
                            <Form.Control placeholder="1234 Main Street" onChange={e => setAddress(e.target.value)}/>
                         </Form.Group>

                        <Form.Group controlId="add">
                            <Form.Label>Address Line 2</Form.Label>
                            <Form.Control placeholder="Apartment, Unit or Suite #" onChange={e => setAddressTwo(e.target.value)}/>
                         </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="add">
                                <Form.Label>City</Form.Label>
                            <Form.Control placeholder="City" onChange={e => setCity(e.target.value)}/>
                            </Form.Group>

                                <Form.Group as={Col} controlId="add">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control placeholder="State" onChange={e => setUSState(e.target.value)} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="add">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control placeholder="12345" onChange={e => setZip(e.target.value)} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="add">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control className="mb-2" type="text" placeholder="1234567890" onChange={e => setPhoneNum(e.target.value)}></Form.Control>
                            </Form.Group>

                            <h6>Gender</h6>
                            <Form.Group controlId="add">
                                <Form.Control as="select" onChange={e => setGender(e.target.value)}>
                                    <option value="F">Female</option>
                                    <option value="M">Male</option>

                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="add">
                                <Form.Label>Birth Date</Form.Label>
                                <Form.Control className="textspace" type="text" placeholder="7/8/1980" onChange={e => setBirthDate(e.target.value)}></Form.Control>
                            </Form.Group>

                            <Form.Group controlId="add">
                                <Form.Label>Hire Date</Form.Label>
                                <Form.Control className="textspace" type="text" placeholder="1/31/2020" onChange={e => setHireDate(e.target.value)}></Form.Control>
                            </Form.Group>

                            <Row className="text-center">
                                <Button as="input" className="addUserbutton mt-4 mb-4" size="lg" type="submit" value="Submit" />{' '}
                            </Row>
                        </Form>
                    </Col>
                    <Col xs='2'>
                    </Col>
                </Row>


            </Container>

            <Container>

                <Row>
                    <Col xs="2"></Col>
                    <Col xs="8" className="uploaddiv">
                        <h5 className="mt-3 ml-5 bold oswald">Application</h5>

                        <form method="Post" className="text-center" action="/uploadfiles" enctype="multipart/form-data">
                        <input type="hidden" name="filetype" value="Application" />
                        <input type="hidden" name="databasefield" value="app_rec" />
                        Employee email: <input type="text" name="employeeEmail" placeholder="js@gmail.com" />
                            <input id="application" type="file" name="file" />
                            <input type="submit" name="Upload" value="Upload" className="uploadbutton mt-4 mb-4" size="lg" />
                        </form>
                        <hr />
                        <h5 className="mt-3 ml-5 bold oswald">I9</h5>

                        <form method="Post" className="text-center" action="/uploadfiles" enctype="multipart/form-data">
                            <input type="hidden" name="filetype" value="I9" />
                            <input type="hidden" name="databasefield" value="i9_rec" />
                        Employee email: <input type="text" name="employeeEmail" placeholder="js@gmail.com" />
                            <input id="i9" type="file" name="file" />
                            <input type="submit" name="Upload" value="Upload" className="uploadbutton mt-4 mb-4" size="lg" />
                        </form>
                        <hr />
                        <h5 className="mt-3 ml-5 bold oswald">W4</h5>

                        <form method="Post" className="text-center" action="/uploadfiles" enctype="multipart/form-data">
                        <input type="hidden" name="filetype" value="W4" />
                        <input type="hidden" name="databasefield" value="w4_rec" />
                        Employee email: <input type="text" name="employeeEmail" placeholder="js@gmail.com" />
                            <input id="w4" type="file" name="file" />
                            <input type="submit" name="Upload" value="Upload" className="uploadbutton mt-4 mb-4" size="lg" />
                        </form>
                        <hr />
                        <h5 className="mt-3 ml-5 bold oswald">Confidentiality Agreement</h5>

                        <form method="Post" className="text-center" action="/uploadfiles" enctype="multipart/form-data">
                        <input type="hidden" name="filetype" value="Confidentiality Agreement" />
                        <input type="hidden" name="databasefield" value="ca_rec" />
                        Employee email: <input type="text" name="employeeEmail" placeholder="js@gmail.com" />
                            <input id="ca" type="file" name="file" />
                            <input type="submit" name="Upload" value="Upload" className="uploadbutton mt-4 mb-4" size="lg" />
                        </form>
                        <hr />
                        <h5 className="mt-3 ml-5 bold oswald">EXP</h5>

                        <form method="Post" className="text-center" action="/uploadfiles" enctype="multipart/form-data">
                        <input type="hidden" name="filetype" value="exp_rec" />
                        <input type="hidden" name="databasefield" value="app_rec" />
                        Employee email: <input type="text" name="employeeEmail" placeholder="js@gmail.com" />
                            <input id="exp" type="file" name="file" />
                            <input type="submit" name="Upload" value="Upload" className="uploadbutton mt-4 mb-4" size="lg" />
                        </form>

                        <hr />
                        <h5 className="mt-3 ml-5 bold oswald">TMH</h5>

                        <form method="Post" className="text-center" action="/uploadfiles" enctype="multipart/form-data">
                        <input type="hidden" name="filetype" value="TMH" />
                        <input type="hidden" name="databasefield" value="tmh_rec" />
                        Employee email: <input type="text" name="employeeEmail" placeholder="js@gmail.com" />
                            <input id="tmh" type="file" name="file" />
                            <input type="submit" name="Upload" value="Upload" className="uploadbutton mt-4 mb-4" size="lg" />
                        </form>

                    </Col>
                    <Col xs="2"></Col>
                </Row>

            </Container>
            <Footer />
        </>
    );
};

export default AddUser;

