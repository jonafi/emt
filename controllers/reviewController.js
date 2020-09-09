const db = require("../models");

// Defining methods for the Review controller
module.exports = {
  findAll: function(req, res) {
    db.review
      .findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllByEmployee: function(req, res) {
    db.review
      .findAll({ where: { employeeId: req.params.id }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
  db.review
    .findOne({ where: { id: req.params.id }})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.review
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.review
    .update(req.body,{ where: { id: req.params.id }})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.review
      .destroy({ where: { id: req.params.id }})
      .then(num => {
        if (num == 1) {
          res.send({ message: "Review was deleted successfully!" });
        } else {
          res.send({ message: `Cannot delete review with id=${id}. Maybe review was not found!` });
        }
      })
      .catch(err => res.status(422).json(err));
  },
};
