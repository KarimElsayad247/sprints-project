const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const Category = require("../models/Category");

//@desc         Get All Categories
//@route        GET /api/v1/categories
//@access       Public
exports.getCategories = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@desc         Add a New Category
//@route        POST /api/v1/categories
//@access       Private
exports.addCategory = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  const category = await Category.create(req.body);
  res.status(200).json({ success: true, data: category });
});

//@desc         Update a Category
//@route        PUT /api/v1/categories/:id
//@access       Private
exports.updateCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, data: category });
});

//@desc         Delete a Category
//@route        DELETE /api/v1/categories/:id
//@access       Private
exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findByIdAndRemove(req.params.id);
  res.status(200).json({ success: true, data: {} });
});

//@desc         Get Places of a Category
//@route        GET /api/v1/categories/:categoryId
//@access       Public
exports.getPlaces = asyncHandler(async (req, res, next) => {});
