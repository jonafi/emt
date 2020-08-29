import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

function Employee() {
    const { isAuthenticated } = useAuth0();
    const [data, setData] = useState([]);

    useEffect(async () => {
        const result = await axios('/api/all');
        setData(result.data);
    }, []);

    return (
        <div>
            <h1>DB info below</h1>
            {isAuthenticated && (
                <ul>
                    {data.map(person => (
                        <li key={person.id}>
                            <div>Department: {person.department}</div> 
                            <div>Status: {person.status}</div> 
                            <div>Role: {person.role}</div> 
                            <div>First Name:{person.first_name}</div> 
                            <div>Middle Initial: {person.middle_init}</div> 
                            <div>Last Name: {person.last_name}</div> 
                            <div>Address 1: {person.address_line1}</div> 
                            <div>Address 2: {person.addresss_line2}</div> 
                            <div>City: {person.city}</div> 
                            <div>State: {person.state}</div> 
                            <div>Phone: {person.primary_phone}</div> 
                            <div>Personal Email: {person.personal_email}</div> 
                            <div>Work Email: {person.work_email}</div> 
                            <div>Hire Date: {person.hire_date}</div> 
                            <div>DOB: {person.birth_date}</div> 
                            <div>Gender: {person.gender}</div> 
                            <div>Pay Type: {person.pay_type}</div> 
                            <div>Pay Freq: {person.pay_freq}</div> 
                            <div>Pay Rate: {person.pay_rate}</div> 
                            <div>App Source: {person.app_source}</div> 
                            <div>App Rec: {person.app_rec}</div> 
                            <div>I9: {person.i9_rec}</div> 
                            <div>W4: {person.w4_rec}</div> 
                            <div>CA: {person.ca_rec}</div> 
                            <div>EXP: {person.exp_rec}</div> 
                            <div>TMH: {person.tmh_rec}</div> 
                            <div>Welcom Train: {person.welcome_train}</div> 
                            <div>Core Camp Train: {person.core_camp_train}</div> 
                        </li>
                        
                    ))}
              
                </ul>
            )}
        </div>

    );
}

export default Employee;