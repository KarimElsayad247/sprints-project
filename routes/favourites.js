const router = require("express").Router({ mergeParams: true });
const favouritesController = require("../controllers/favourites");
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(protect, authorize("user"), favouritesController.getFavourites)
  .post(protect, authorize("user"), favouritesController.addFavourite);

router
  .route("/:favouriteId")
  .get(protect, authorize("user"), favouritesController.getFavourite)
  .delete(protect, authorize("user"), favouritesController.deleteFavourite);

module.exports = router;
