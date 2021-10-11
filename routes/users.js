const router = require("express").Router();
const usersController = require("../controllers/users");
const { protect, authorize } = require("../middleware/auth");

router
  .route("/user/photo")
  .post(
    protect,
    authorize("user", "admin"),
    usersController.profilePhotoUpload,
  );

module.exports = router;
