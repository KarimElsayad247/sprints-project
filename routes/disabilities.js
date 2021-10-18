const router = require("express").Router();
const disabilitiesController = require("../controllers/disabilities");

router.route("/disabilities").get(disabilitiesController.getAllDisabilities);

module.exports = router;
