const express = require("express");
const reviewsController = require("../controllers/reviews");

const Review = require("../models/Review");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(
    advancedResults(Review, {
      path: "place",
      select: "name",
    }),
    reviewsController.getReviews,
  )
  .post(protect, authorize("admin", "user"), reviewsController.addReview);

router.route("/place/:placeId/reviews").get(reviewsController.getReviews);

module.exports = router;
