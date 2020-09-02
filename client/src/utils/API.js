import axios from 'axios';

export default {
  getEmployees: function() {
    return axios.get('/api/employees')
  },
  getUser: function() {
    return axios.get('/api/user/:email')
  },
  updateEmployee: function() {
    return axios.put('/api/employee/:id')
  },
  postEmployee: function(employee) {
    return axios.post('/api/employee', employee)
  },
  deleteEmployee: function(id) {
    return axios.delete('/api/employee/' + id)
  }
};