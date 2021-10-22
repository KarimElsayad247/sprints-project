const router = require("express").Router({ mergeParams: true });
const reviewsController = require("../controllers/reviews");

const Review = require("../models/Review");

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router.route("/").get(
  advancedResults(Review, {
    path: "place",
    select: "name",
  }),
  reviewsController.getReviews,
);

router
  .route("/place/:placeId/comments")
  .get(reviewsController.getReviews)
  .post(protect, authorize("admin", "user"), reviewsController.addComment);

router
  .route("/place/:placeId/comments/:commentId")
  .get(reviewsController.getComment)
  .put(protect, authorize("admin", "user"), reviewsController.updateComment)
  .delete(protect, authorize("admin", "user"), reviewsController.deleteComment);

module.exports = router;
