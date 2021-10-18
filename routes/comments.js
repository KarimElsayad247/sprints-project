const router = require("express").Router();
const commentsController = require("../controllers/comments");

const { protect, authorize } = require("../middleware/auth");

router
  .route("/place/:placeId/comments")
  .get(commentsController.getComments)
  .post(protect, authorize("admin", "user"), commentsController.addComment);

router
  .route("/place/:placeId/comments/:commentId")
  .get(placesController.getComment)
  .put(protect, authorize("admin", "user"), placesController.updateComment)
  .delete(protect, authorize("admin", "user"), placesController.deleteComment);

module.exports = router;
