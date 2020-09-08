import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import EmployeePerformance from '../../../models/employeePerformance';

function EmployeePerformance() {
    const { isAuthenticated } = useAuth0();
    const [data, setData] = useState([]);

    useEffect(async () => {
        const result = await axios('/api/performance');
        setData(result.data);
    }, []);

    console.log(result.data);

    return (
        <div>
            <h1>Employee Performance</h1>
            {isAuthenticated && (
                <ul>
                    {data.map(review => (
                        <li key={review.id}>
                            <div>employeeId: {review.id}</div> 
                            <div>reviewYear: {review.reviewYear}</div> 
                            <div>reviewQtr: {review.reviewQtr}</div> 
                            <div>reviewStatus:{review.reviewStatus}</div> 
                            <div>goalNetSales: {review.goalNetSales}</div> 
                            <div>goalHours: {review.goalHours}</div> 
                            <div>goalBB: {review.goalBB}</div> 
                            <div>goalTHPC: {review.goalTHPC}</div> 
                            <div>goalCPFH: {review.goalCPFH}</div> 
                            <div>goalSPH: {review.goalSPH}</div> 
                            <div>goalAttendance: {review.goalAttendance}</div> 
                            <div>actualNetSales: {review.actualNetSales}</div> 
                            <div>actualHours: {review.actualHours}</div> 
                            <div>actualBB: {review.actualBB}</div> 
                            <div>actualTHPC: {review.actualTHPC}</div> 
                            <div>actualCPFH: {review.actualCPFH}</div> 
                            <div>actualSPH: {review.actualSPH}</div> 
                            <div>actualAttendance: {review.actualAttendance}</div> 
                        </li>
                        
                    ))}
              
                </ul>
            )}
        </div>

    );
}

export default EmployeePerformance;