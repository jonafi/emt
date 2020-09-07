// Dependencies
var router = require("express").Router();

// Sequelize Model for database
const Employee = require("../../controllers/employeeController");

// GET
router.get("/employees", Employee.findAll);

router.get("/employee/:id", Employee.findById);

router.get("/managers", Employee.findAllManagers);

router.get("/user/:personal_email", Employee.findByEmail)

// POST
router.post("/employee", Employee.create);

// DELETE
router.delete("/employee/:id", Employee.remove);

// UPDATE
router.put("/employee/:id", Employee.update);

// Export
module.exports = router;