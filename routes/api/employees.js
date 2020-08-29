
// Dependencies
const express = require("express");
// setting router
const router = express.Router();

// Sequelize Model for database
const Employee = require("../../models/employee");


// POST
router.post("/employee", (req, res) => {
  Employee.create(
  { 
    info: "Stuart"
  })
    .then((results) => {
      res.json(results);

    });
});

// DELETE
router.delete("/employee/:id", (req, res) => {
  Employee.destroy(
  {
    where: {
      id: 3
    }
  })
  .then((results) => {
    res.json(results);
  });
});

// UPDATE
router.put("/employee/:id", (req, res) => {
  Employee.save(
    {
      info: "James"
    },
    {
      where: {
        id: 4
      }
    }
  )
});

// GET
router.get(("/employees", (req, res) => {

  res.json("It works");

  // Employee.findAll({}).then(results => {
  //   res.json(results.data);
  // });
}));

module.exports = router;
