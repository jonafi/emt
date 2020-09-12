import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import API from '../utils/API';
import {Col, Container, Row, Button} from 'react-bootstrap';

function PerformanceReview() {
    const { user, isAuthenticated } = useAuth0();
    const [data, setData] = useState([]);

    useEffect(async () => {
        getEmployeePerformance();
    }, []);

    function getEmployeePerformance() {
        console.log(user.email);
        API.getEmployeePerformance(user.email)
          .then(review => {
            setData(review.data);
            console.log(review.data)
          })
          .catch(err => console.log(err));
      }

    return (
        <div>
            {isAuthenticated && (
                <ul>
                    {data.map(review => (
                        <li key={review.id}>
                            <row>
                                <div className="d-flex flex-row">
                                    <div className="p-2">Review Year: {review.reviewYear}</div> 
                                    <div className="p-2">Review Qtr: {review.reviewQtr}</div> 
                                    <div className="p-2">Review Status:{review.reviewStatus}</div> 
                                </div>
                            </row>
                            <row>
                                <div className="d-flex flex-row">
                                    <div>Overall Rating: {review.actualOverallRating}</div> 
                                </div>
                            </row>
                            <row>
                                <div className="d-flex flex-row">
                                    <div>GOALS:</div>
                                    <div>Net Sales: {review.goalNetSales}</div> 
                                    <div>Hours: {review.goalHours}</div> 
                                    <div>BB%: {review.goalBB}</div> 
                                    <div>THPC: {review.goalTHPC}</div> 
                                    <div>CPFH: {review.goalCPFH}</div> 
                                    <div>SPH: {review.goalSPH}</div> 
                                    <div>L360: {review.goalSPH}</div> 
                                    <div>Attendance: {review.goalAttendance}</div> 
                                    <div>Attitude: {review.goalAttitude}</div> 
                                </div>
                            </row>
                            <row>
                                <div className="d-flex flex-row">
                                    <div>ACTUALS:</div>
                                    <div>Net Sales: {review.actualNetSales}</div> 
                                    <div>Hours: {review.actualHours}</div> 
                                    <div>BB%: {review.actualBB}</div> 
                                    <div>THPC: {review.actualTHPC}</div> 
                                    <div>CPFH: {review.actualCPFH}</div> 
                                    <div>SPH: {review.actualSPH}</div> 
                                    <div>L360: {review.actualL360}</div> 
                                    <div>Attendance: {review.actualAttendance}</div> 
                                    <div>Attitude: {review.actualAttitude}</div> 
                                </div>
                            </row>
                            <br></br>
                        </li>
                        
                    ))}
              
                </ul>
            )}
        </div>

    );
}

export default PerformanceReview;