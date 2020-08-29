import axios from 'axios';

export default {
  getEmployees: function() {
    return axios.get('/api/employees')
  },
  updateEmployee: function() {
    return axios.put('/api/employee/:id')
  },
  postEmployee: function() {
    return axios.post('/api/employee')
  },
  deleteEmployee: function(id) {
    return axios.delete('/api/employee/' + id)
  }
};