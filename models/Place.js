const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a place name"],
  },
  phone: {
    type: String,
    match: [/^01[0-2]\d{1,8}$/, "Please add a valid phone number"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [500, "Description can not be more than 500 characters"],
  },
  address: {
    type: String,
    required: [true, "Please add an address"],
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Place", PlaceSchema);
