const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a category name"],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    photo: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

CategorySchema.virtual("places", {
  ref: "Place",
  localField: "_id",
  foreignField: "category",
  justOne: false,
});

module.exports = mongoose.model("Category", CategorySchema);
