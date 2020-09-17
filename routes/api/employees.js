// Dependencies
var router = require("express").Router();

// Sequelize Model for database
const Employee = require("../../controllers/employeeController");

// GET
router.get("/employees", Employee.findAll);

//GET by ID
router.get("/employee/:id", Employee.findById);

//GET by Manager
router.get("/managers", Employee.findAllManagers);

//GET by Email
router.get("/user/:personal_email", Employee.findByEmail)

// POST
router.post("/employee", Employee.create);

// DELETE
router.delete("/employee/:id", Employee.remove);

// UPDATE
router.put("/employee", Employee.update);

// Export
module.exports = router;