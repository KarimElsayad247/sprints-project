const express = require("express");
const {
  register,
  login,
  getMe,
  updateProfile,
} = require("../controllers/auth");
const router = express.Router();

const { protect } = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.route("/me").get(protect, getMe).put(protect, updateProfile);

module.exports = router;
