const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please add a title"],
    maxlength: [128, "title is too long"],
  },
  text: {
    type: String,
    required: [true, "please add some text"],
    maxlength: [500, "review is too long"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, "Please add a rating between 1 and 5"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
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
});

// Prevent user from submitting more than one review for a place
ReviewSchema.index({ place: 1, user: 1 }, { unique: true });

// Static method to get avg rating and save
ReviewSchema.statics.getAverageRating = async function (placeId) {
  const obj = await this.aggregate([
    {
      $match: { place: placeId },
    },
    {
      $group: {
        _id: "$place",
        averageRating: { $avg: "$rating" },
      },
    },
  ]);

  try {
    await this.model("Place").findByIdAndUpdate(placeId, {
      averageRating: obj[0].averageRating,
    });
  } catch (err) {
    console.error(err);
  }
};

// Call getAverageCost after save
ReviewSchema.post("save", function () {
  this.constructor.getAverageRating(this.place);
});

// Call getAverageCost before remove
ReviewSchema.post("remove", function () {
  this.constructor.getAverageRating(this.place);
});

module.exports = mongoose.model("Review", ReviewSchema);
