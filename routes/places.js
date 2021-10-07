const router = require("express").Router();
const placesController = require("../controllers/places");

const Category = require("../models/Category");

const advancedResults = require("../middleware/advancedResults");

router
  .route("/categories")
  .get(advancedResults(Category), placesController.getCategories)
  .post(placesController.addCategory);

router.route("/categories/:categoryId").get(placesController.getPlaces);

module.exports = router;
