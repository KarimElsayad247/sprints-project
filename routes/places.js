const router = require("express").Router();
const placesController = require("../controllers/places");

const Category = require("../models/Category");

const advancedResults = require("../middleware/advancedResults");

const { protect, authorize } = require("../middleware/auth");

router
  .route("/categories")
  .get(advancedResults(Category, "places"), placesController.getCategories)
  .post(protect, authorize("admin", "user"), placesController.addCategory);

router
  .route("/categories/:categoryId/places")
  .get(placesController.getPlaces)
  .post(protect, authorize("admin", "user"), placesController.addPlace);

router
  .route("/categories/:categoryId/places/:placeId")
  .get(placesController.getPlace)
  .put(protect, authorize("admin", "user"), placesController.updatePlace)
  .delete(protect, authorize("admin"), placesController.deletePlace);

router.route("/palces").get(placesController.getPlaces);

module.exports = router;
