const router = require("express").Router();
const employeesController = require("../../controllers/employeeController");

// Matches with "/api/books"
router.route("/")
  .get(employeeController.findAll)
  .post(employeeController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(employeesController.findById)
  .put(employeesController.update)
  .delete(employeesController.remove);

module.exports = router;
