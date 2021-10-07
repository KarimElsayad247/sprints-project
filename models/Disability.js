const mongoose = require("mongoose");

const DisabilitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a disability name"],
    unique: true,
  },
});

module.exports = mongoose.model("Disability", DisabilitySchema);
