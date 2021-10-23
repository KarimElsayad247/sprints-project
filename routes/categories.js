const router = require("express").Router();
const categoriesController = require("../controllers/categories");

const placesRouter = require("./places");

const Category = require("../models/Category");

const advancedResults = require("../middleware/advancedResults");

const { protect, authorize } = require("../middleware/auth");

router.use("/:categoryId/places", placesRouter);

router
  .route("/")
  .get(advancedResults(Category, "places"), categoriesController.getCategories)
  .post(protect, authorize("admin", "user"), categoriesController.addCategory);

module.exports = router;
