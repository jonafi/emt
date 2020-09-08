// Dependencies
var router = require("express").Router();

// Sequelize Model for database
const Employee = require("../../controllers/employeePerformanceController");

// GET
router.get("/performance", EmployeePerformance.findAll);

// GET by ID
router.get("/performance/:id", EmployeePerformance.findById);

// POST
router.post("/performance", EmployeePerformance.create);

// DELETE
router.delete("/performance/:id", EmployeePerformance.remove);

// UPDATE
router.put("/performance/:id", EmployeePerformance.update);

// Export
module.exports = router;