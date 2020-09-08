import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import EmployeePerformance from '../../../models/employeePerformance';

function EmployeeReviews() {
    const { isAuthenticated } = useAuth0();
    const [data, setData] = useState([]);

    useEffect(async () => {
        const result = await axios('/api/reviews');
        setData(result.data);
    }, []);

    return (
        <div>
            <h1>Employee Performance</h1>
            {isAuthenticated && (
                <ul>
                    {data.map(review => (
                        <li key={person.id}>
                            <div>employeeId: {person.id}</div> 
                            <div>reviewYear: {person.reviewYear}</div> 
                            <div>reviewQtr: {person.reviewQtr}</div> 
                            <div>reviewStatus:{person.reviewStatus}</div> 
                            <div>goalNetSales: {person.goalNetSales}</div> 
                            <div>goalHours: {person.goalHours}</div> 
                            <div>goalBB: {person.goalBB}</div> 
                            <div>goalTHPC: {person.goalTHPC}</div> 
                            <div>goalCPFH: {person.goalCPFH}</div> 
                            <div>goalSPH: {person.goalSPH}</div> 
                            <div>goalAttendance: {person.goalAttendance}</div> 
                            <div>actualNetSales: {person.actualNetSales}</div> 
                            <div>actualHours: {person.actualHours}</div> 
                            <div>actualBB: {person.actualBB}</div> 
                            <div>actualTHPC: {person.actualTHPC}</div> 
                            <div>actualCPFH: {person.actualCPFH}</div> 
                            <div>actualSPH: {person.actualSPH}</div> 
                            <div>actualAttendance: {person.actualAttendance}</div> 
                        </li>
                        
                    ))}
              
                </ul>
            )}
        </div>

    );
}

export default EmployeePerformance;