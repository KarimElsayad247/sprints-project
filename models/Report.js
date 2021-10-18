const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  cause: {
    type: String,
    required: [true, "Please add a title"],
  },
  reporter: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  place: {
    type: mongoose.Schema.ObjectId,
    ref: "Place",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Report", ReportSchema);
