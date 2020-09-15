// Dependencies
var router = require("express").Router();

// Sequelize Model for database
const Review = require("../../controllers/reviewController");

// GET
router.get("/reviews", Review.findAll);

// GET by ID
router.get("/review/:id", Review.findById);

// GET by Email
router.get("/reviews/:personal_email", Review.findByEmail)

// POST
router.post("/addreview", Review.create);

// DELETE
router.delete("/deletereview/:id", Review.remove);

// UPDATE
router.put("/updatereview/:id", Review.update);

// Export
module.exports = router;
