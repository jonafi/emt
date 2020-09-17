import React, { useState, useEffect } from 'react';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";

function AddReview(){
     // Setting our component's initial state
    const [employeeId, setEmployeeId] = useState("");
    const [personal_email, setPersonal_email]= useState("");
    const [reviewYear, setReviewYear]= useState("");
    const [reviewQtr, setReviewQtr]= useState("");
    const [reviewStatus, setReviewStatus]= useState("");
    const [actualOverallRating, setActualOverallRating]= useState("");
    const [goalNetSales, setGoalNetSales]= useState("");
    const [goalHours, setGoalHours]= useState("");
    const [goalBB, setGoalBB]= useState("");
    const [goalTHPC, setGoalTHPC]= useState("");
    const [goalCPFH, setGoalCPFH]= useState("");
    const [goalSPH, setGoalSPH]= useState("");
    const [goalL360, setGoalL360]= useState("");
    const [goalAttendance, setGoalAttendance]= useState("");
    const [goalAttitude, setGoalAttitude]= useState("");
    const [actualNetSales, setActualNetSales]= useState("");
    const [actualHours, setActualHours]= useState("");
    const [actualBB, setActualBB]= useState("");
    const [actualTHPC, setActualTHPC]= useState("");
    const [actualCPFH, setActualCPFH]= useState("");
    const [actualSPH, setActualSPH]= useState("");
    const [actualL360, setActualL360]= useState("");
    const [actualAttendance, setActualAttendance]= useState("");
    const [actualAttitude, setActualAttitude]= useState("");
    
    function handleOnSubmit (event) {
        event.preventDefault();
        console.log(employeeId, personal_email, reviewYear, reviewQtr, reviewStatus, actualOverallRating, goalNetSales,
            goalHours, goalBB, goalTHPC, goalCPFH, goalSPH, goalL360, goalAttendance, goalAttitude, actualNetSales, 
            actualHours, actualBB, actualTHPC, actualCPFH, actualSPH, actualL360, actualAttendance, actualAttitude
        ); 
        
        var obj = {
            "employeeId": parseInt(employeeId), 
            "personal_email": personal_email, 
            "reviewYear": reviewYear, 
            "reviewQtr": reviewQtr, 
            "reviewStatus": reviewStatus, 
            "actualOverallRating": parseInt(actualOverallRating),  
            "goalNetSales": parseFloat(goalNetSales),
            "goalHours": parseFloat(goalHours), 
            "goalBB": parseFloat(goalBB),
            "goalTHPC": parseFloat(goalTHPC), 
            "goalCPFH": parseFloat(goalCPFH), 
            "goalSPH": parseFloat(goalSPH), 
            "goalL360": parseFloat(goalL360), 
            "goalAttendance": parseInt(goalAttendance), 
            "goalAttitude":  parseInt(goalAttitude), 
            "actualNetSales": parseFloat(actualNetSales), 
            "actualHours": parseFloat(actualHours),
            "actualBB": parseFloat(actualBB),
            "actualTHPC": parseFloat(actualTHPC), 
            "actualCPFH": parseFloat(actualCPFH), 
            "actualSPH": parseFloat(actualSPH),  
            "actualL360": parseFloat(actualL360),  
            "actualAttendance": parseInt(actualAttendance), 
            "actualAttitude": parseInt(actualAttitude),
        } 

        console.log(obj);

        API.postReview(obj)
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }

    return (
        <>
        <Nav/>
        <Container>
        <Row>
        <Col xs="1"></Col>
        <Col xs="10"  className="AddUser">
            <h1 className="mt-5 bold addnew">Add Reivew</h1>
            <form className="w-75 mx-auto mt-4" >
                
                <h3>Overall</h3>
                <Form.Group controlId ="add" className="mt-3">
                    <Form.Label>Employee ID</Form.Label>
                    <Form.Control type = "text" placeholder="Employee ID" onChange={e => setEmployeeId(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId ="add" className="mt-3">
                    <Form.Label>Personal Email</Form.Label>
                    <Form.Control type = "text" placeholder="Personal Email" onChange={e => setPersonal_email(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId ="add" className="mt-3">
                    <Form.Label>Review Year</Form.Label>
                    <Form.Control type = "text" placeholder="20XX" onChange={e => setReviewYear(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId ="add" className="mt-3">
                    <Form.Label>Review Quarter</Form.Label>
                    <Form.Control as="select" onChange={e => setReviewQtr(e.target.value)}>
                        <option value="Q1">1st Quarter</option>
                        <option value="Q2">2nd Quarter</option>
                        <option value="Q3">3rd Quarter</option>
                        <option value="Q4">4th Quarter</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId ="add" className="mt-3">
                    <Form.Label>Review Status</Form.Label>
                    <Form.Control as="select" onChange={e => setReviewStatus(e.target.value)}>
                        <option value="Pending">Pending</option>
                        <option value="Complete">Complete</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId ="add" className="mt-3">
                    <Form.Label>Overall Rating</Form.Label>
                    <Form.Control as="select" onChange={e => setActualOverallRating(e.target.value)}>
                        <option value="1">1-Superior</option>
                        <option value="2">2-Above Average</option>
                        <option value="3">3-Meets</option>
                        <option value="4">4-Below Average</option>
                        <option value="5">5-Poor</option>
                    </Form.Control>
                </Form.Group>
                
                <div className="form-row">
                    <div className="col-md-6">
                        <h3>Goals</h3>
                        <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>$ Net Sales</Form.Label>
                            <Form.Control type = "text" placeholder="99999.99" onChange={e => setGoalNetSales(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>Floor Hours</Form.Label>
                            <Form.Control type = "text" placeholder="999" onChange={e => setGoalHours(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>Back Bar %</Form.Label>
                            <Form.Control type = "text" placeholder="99.9" onChange={e => setGoalBB(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>$ Take Home Per Client</Form.Label>
                            <Form.Control type = "text" placeholder="9.99" onChange={e => setGoalTHPC(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>Clients per Floor Hour</Form.Label>
                            <Form.Control type = "text" placeholder="9.99" onChange={e => setGoalCPFH(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>$ Sales / Hour</Form.Label>
                            <Form.Control type = "text" placeholder="99.99" onChange={e => setGoalSPH(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>Listen 360</Form.Label>
                            <Form.Control type = "text" placeholder="99.9" onChange={e => setGoalL360(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>Attendance</Form.Label>
                            <Form.Control as="select" onChange={e => setGoalAttendance(e.target.value)}>
                                <option value="1">1-Superior</option>
                                <option value="2">2-Above Average</option>
                                <option value="3">3-Meets</option>
                                <option value="4">4-Below Average</option>
                                <option value="5">5-Poor</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>Attitude</Form.Label>
                            <Form.Control as="select" onChange={e => setGoalAttitude(e.target.value)}>
                                <option value="1">1-Superior</option>
                                <option value="2">2-Above Average</option>
                                <option value="3">3-Meets</option>
                                <option value="4">4-Below Average</option>
                                <option value="5">5-Poor</option>
                            </Form.Control>
                        </Form.Group>
                    </div>

                    <div className="col-md-6">
                        <h3>Actual Results</h3>
                        <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>$ Net Sales</Form.Label>
                            <Form.Control type = "text" placeholder="99999.99" onChange={e => setActualNetSales(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>Floor Hours</Form.Label>
                            <Form.Control type = "text" placeholder="999" onChange={e => setActualHours(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>Back Bar %</Form.Label>
                            <Form.Control type = "text" placeholder="99.9" onChange={e => setActualBB(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>$ Take Home Per Client</Form.Label>
                            <Form.Control type = "text" placeholder="9.99" onChange={e => setActualTHPC(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>Clients per Floor Hour</Form.Label>
                            <Form.Control type = "text" placeholder="9.99" onChange={e => setActualCPFH(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>$ Sales / Hour</Form.Label>
                            <Form.Control type = "text" placeholder="99.99" onChange={e => setActualSPH(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>Listen 360</Form.Label>
                            <Form.Control type = "text" placeholder="99.9" onChange={e => setActualL360(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>Attendance</Form.Label>
                            <Form.Control as="select" onChange={e => setActualAttendance(e.target.value)}>
                                <option value="1">1-Superior</option>
                                <option value="2">2-Above Average</option>
                                <option value="3">3-Meets</option>
                                <option value="4">4-Below Average</option>
                                <option value="5">5-Poor</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>Attitude</Form.Label>
                            <Form.Control as="select" onChange={e => setActualAttitude(e.target.value)}>
                                <option value="1">1-Superior</option>
                                <option value="2">2-Above Average</option>
                                <option value="3">3-Meets</option>
                                <option value="4">4-Below Average</option>
                                <option value="5">5-Poor</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                </div>
                <Row className="text-center">
                    <Button as="input" className="addUserbutton mt-4 mb-4" size="lg" type="submit" value="Submit" onClick={handleOnSubmit} />{' '}
                </Row>            
            </form>
        </Col>
        <Col xs="1"></Col>
        </Row>
        </Container>
        <Footer/>
        </>
    );
};

export default AddReview; 
