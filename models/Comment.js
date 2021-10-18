const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: [128, "title is too long"],
  },
  body: {
    type: String,
    maxlength: [500, "body is too long"],
  },
  user: {
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
  }
});

module.exports = mongoose.model("Comment", CommentSchema);
