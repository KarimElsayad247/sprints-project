const router = require("express").Router({ mergeParams: true });
const placesController = require("../controllers/places");

const reviewsRouter = require("./reviews");

const Category = require("../models/Category");
const Place = require("../models/Place");

const advancedResults = require("../middleware/advancedResults");

const { protect, authorize } = require("../middleware/auth");

router.use("/:placeId/reviews", reviewsRouter);

router
  .route("/")
  .get(advancedResults(Place, { path: "category" }), placesController.getPlaces)
  .post(protect, authorize("admin", "user"), placesController.addPlace);

router
  .route("/:placeId")
  .get(placesController.getPlace)
  .put(protect, authorize("admin", "user"), placesController.updatePlace)
  .delete(protect, authorize("admin"), placesController.deletePlace);

router
  .route("/:placeId/gallery")
  .put(
    protect,
    authorize("admin", "user"),
    placesController.uploadPlacePhotoGallery,
  );

module.exports = router;
