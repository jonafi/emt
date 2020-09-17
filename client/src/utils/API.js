import axios from 'axios';

export default {
  getEmployees: function() {
    return axios.get('/api/employees')
  },
  getUser: function(email) {
    return axios.get('/api/user/'+ email)
  },
  updateEmployee: function(info) {
    return axios.put('/api/employee', info)
  },
  postEmployee: function(employee) {
    return axios.post('/api/employee', employee)
  },
  deleteEmployee: function(id) {
    return axios.delete('/api/employee/' + id)
  },
  getEmployeePerformance: function(email) {
    return axios.get('/api/reviews/' + email)
  },
  getAllPerformance: function() {
    return axios.get('/api/reviews')
  },
  postReview: function(review) {
    return axios.post('/api/addreview', review)
  },
};