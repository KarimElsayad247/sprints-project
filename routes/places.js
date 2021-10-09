const router = require("express").Router();
const placesController = require("../controllers/places");

const Category = require("../models/Category");

const advancedResults = require("../middleware/advancedResults");

router
  .route("/categories")
  .get(advancedResults(Category, "places"), placesController.getCategories)
  .post(placesController.addCategory);

router
  .route("/categories/:categoryId")
  .get(placesController.getPlaces)
  .post(placesController.addPlace);

router
  .route("/categories/:categoryId/:placeId")
  .put(placesController.updatePlace)
  .delete(placesController.deletePlace);

module.exports = router;
