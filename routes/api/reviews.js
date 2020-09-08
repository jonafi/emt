// Dependencies
var router = require("express").Router();

// Sequelize Model for database
const Review = require("../../controllers/reviewController");

// GET
router.get("/reviews", Review.findAll);

// GET by ID
router.get("/review/:id", Review.findById);

// POST
router.post("/review", Review.create);

// DELETE
router.delete("/review/:id", Review.remove);

// UPDATE
router.put("/review/:id", Review.update);

// Export
module.exports = router;
