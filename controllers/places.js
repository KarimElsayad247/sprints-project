const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const Category = require("../models/Category");
const Place = require("../models/Place");

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
//@route        GET /api/v1/palces
//@route        GET /api/v1/categories/:categoryId/places
//@access       Public
exports.getPlaces = asyncHandler(async (req, res, next) => {
  if (req.params.categoryId) {
    const places = await Place.find({ bootcamp: req.params.categoryId });

    return res.status(200).json({
      success: true,
      count: places.length,
      data: places,
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

//@desc         Get Signle Place
//@route        GET /api/v1/categories/:categoryId/places/:placeId
//@access       Public
exports.getPlace = asyncHandler(async (req, res, next) => {
  const place = await Place.findById(req.params.id).populate({
    path: "category",
  });

  if (!course) {
    return next(
      new ErrorResponse(`No course with the id of ${req.params.id}`),
      404,
    );
  }

  res.status(200).json({
    success: true,
    data: course,
  });
});

//@desc         Add New Place to a Category
//@route        POST /api/v1/categories/:categoryId/places
//@access       Private
exports.addPlace = asyncHandler(async (req, res, next) => {
  const place = await Place.create(req.body);
  res.status(200).json({ success: true, data: place });
});

//@desc         Update a Place
//@route        PUT /api/v1/categories/:categoryId/places/:placeId
//@access       Private
exports.updatePlace = asyncHandler(async (req, res, next) => {
  const place = await Place.findByIdAndUpdate(req.params.placeId, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, data: place });
});

//@desc         Delete a Place
//@route        DELETE /api/v1/categories/:categoryId/places/:placeId
//@access       Private
exports.deletePlace = asyncHandler(async (req, res, next) => {
  await Place.findByIdAndRemove(req.params.placeId);
  res.status(200).json({ success: true, data: {} });
});
