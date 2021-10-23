const router = require("express").Router();
const disabilitiesController = require("../controllers/disabilities");
const advancedResults = require("../middleware/advancedResults");
const Disability = require("../models/Disability");

router
  .route("/disabilities")
  .get(advancedResults(Disability), disabilitiesController.getAllDisabilities);

module.exports = router;
