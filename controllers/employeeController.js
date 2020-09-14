const db = require("../models");

// Defining methods for the Employee controller
module.exports = {
  findAll: function(req, res) {
    db.employee
      .findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllManagers: function(req, res) {
    db.employee
      .findAll({
        where: { role: "Manager" }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.employee
      .findOne({ 
        where: { id: req.params.id }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    db.employee
      .findOne({ 
        where: { personal_email: req.params.personal_email }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.employee
      .create({
        department: req.body.department,
        status: req.body.status,
        role: req.body.role,
        first_name: req.body.first_name,
        middle_init: req.body.middle_init,
        last_name: req.body.last_name,
        address_line1: req.body.address_line1,
        address_line2: req.body.addressline2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        primary_phone: req.body.primary_phone,
        personal_email: req.body.personal_email,
        work_email: req.body.work_email,
        hire_date: req.body.hire_date,
        birth_date: req.body.birth_date,
        gender: req.body.gender,
        pay_type: req.body.pay_type,
        pay_freq: req.body.pay_freq,
        pay_rate: req.body.pay_rate,
        app_source: req.body.app_source,
        app_rec: req.body.app_rec,
        i9_rec: req.body.i9_rec,
        w4_rec: req.body.w4_rec,
        ca_rec: req.body.ca_rec,
        exp_rec: req.body.exp_rec,
        tmh_rec: req.body.tmh_rec,
        welcome_train: req.body.welcome_train,
        core_camp_train: req.body.core_camp_train
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.employee
      .update(req.body,
        {
          where: { id: req.params.id }
        })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.employee
      .destroy({
        where: { id: req.params.id } 
      })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  }
}