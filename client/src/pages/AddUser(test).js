import React, { Component } from 'react';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import axios from 'axios';

export default class AddUser extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
        department: '',
        status: '',
        role: '',
        first_name: '',
        middle_init: '',
        last_name: '',
        address_line1: '',
        address_line2: '',
        city: '',
        state: '',
        zip: '',
        primary_phone: '',
        personal_email: '',
        birth_date: '',
        gender: ''
        }
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const body = this.state;
        axios({
            method: "post",
            url: '/addUser',
            data: body
        })
        .then(function(res) {
            console.log(res);
        })
        .catch(function(error){
            console.log(error);
        });
    };

    render() {
        const {
            department, status, role, first_name, middle_init, last_name,
            address_line1, address_line2, city, state, zip, primary_phone,
            personal_email, birth_date, gender
        } = this.state;

        return (
            <div>
        <form onSubmit={this.handleSubmit}>
            <input defaultValue='department' placeholder= "Department" type="text" name="department" onChange={this.onChange } value={department} />
            <input defaultValue='status' placeholder= "Status (Active/Inactive)" type="text" name="status" onChange={this.onChange } value={status} />
            <input defaultValue='role' placeholder= "Role" type="text" name="role" onChange={this.onChange } value={role} />
            <input defaultValue='first_name' placeholder= "First Name" type="text" name="first_name" onChange={this.onChange } value={first_name} />
            <input defaultValue='middle_init' placeholder= "Middle Initials" type="text" name="middle_init" onChange={this.onChange } value={middle_init} />
            <input defaultValue='last_name' placeholder= "Last Name" type="text" name="last_name" onChange={this.onChange } value={last_name} />
            <input defaultValue='address_line1' placeholder= "Street Address" type="text" name="address_line1" onChange={this.onChange } value={address_line1} />
            <input defaultValue='address_line2' placeholder= "Apartment #, etc" type="text" name="address_line2" onChange={this.onChange } value={address_line2} />
            <input defaultValue='city' placeholder= "City" type="text" name="city" onChange={this.onChange } value={city} />
            <input defaultValue='state' placeholder= "State" type="text" name="state" onChange={this.onChange } value={state} />
            <input defaultValue='zip' placeholder= "ZIP #" type="text" name="zip" onChange={this.onChange } value={zip} />
            <input defaultValue='primary_phone' placeholder= "123-123-1234" type="text" name="primary_phone" onChange={this.onChange } value={primary_phone} />
            <input defaultValue='personal_email' placeholder= "example@email.com" type="text" name="personal_email" onChange={this.onChange } value={personal_email} />
            <input defaultValue='birth_date' placeholder= "01/31/2000" type="text" name="birth_date" onChange={this.onChange } value={birth_date} />
            <input defaultValue='gender' type="text" placeholder= "Gender" name="gender" onChange={this.onChange } value={gender} />
          <button type="submit">Submit</button>
        </form>
      </div>
        );
    }
}




    
    
   
