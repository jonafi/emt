// Dependencies
const express = require("express");

// setting router
const router = express.Router();

// Sequelize Model for database
const EmployeePerformance = require("../../models/employeePerformance");
const { response } = require("express");

// GET
router.get("/api/reviews/:id", (req, res) => {
    EmployeePerformance.findAll ({where: { employeeId:req.params.id }
    }) .then ( response => {res.json(response)})
});

module.exports = router;
