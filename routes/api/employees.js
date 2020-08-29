const router = require("express").Router();
const employeesController = require("../../controllers/employeeController");

// Matches with "/api/employees"
router.route("/")
  .get(employeeController.findAll)
  .post(employeeController.create);

// Matches with "/api/employees/:id"
router
  .route("/:id")
  .get(employeesController.findById)
  .put(employeesController.update)
  .delete(employeesController.remove);

module.exports = router;
