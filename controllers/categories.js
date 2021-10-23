const path = require("path");
const crypto = require("crypto");
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
  const { name, description } = req.body;
  let category = {};

  if (req.files) {
    const { file } = req.files;
    if (!file.mimetype.startsWith("image/")) {
      return next(new ErrorResponse(`Please upload an image file`, 400));
    }

    // Check file size
    if (file.size > process.env.MAX_FILE_UPLOAD) {
      return next(
        new ErrorResponse(
          `Please upload an image less than ${process.env.MAX_FILE_UPLOAD} bytes`,
          400,
        ),
      );
    }
    const randomText = crypto.randomBytes(10).toString("hex");
    // Create custom filename
    file.name = `photo_${randomText}${path.parse(file.name).ext}`;

    file.mv(`${process.env.PROFILE_UPLOAD_PATH}/${file.name}`, async (err) => {
      if (err) {
        console.error(err);
        return next(new ErrorResponse(`Problem with file upload`, 500));
      }

      category = await Category.create({
        name: name,
        description: description,
        photo: file.name,
      });
    });
  } else {
    category = await Category.create(req.body);
  }

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

//@desc         Add a Category Photo
//@route        PUT /api/v1/categories/:id
//@access       Private
exports.AddCategoryPhoto = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return next(
      new ErrorResponse(`Category not found with id ${req.params.id}`, 404),
    );
  }

  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

  const file = req.files.file;

  // Make sure that the image is a photo
  if (!file.mimetype.startsWith("image/")) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }

  // Check file size
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD} bytes`,
        400,
      ),
    );
  }

  // Create custom filename
  const randomText = crypto.randomBytes(10).toString("hex");
  file.name = `photo_${randomText}${path.parse(file.name).ext}`;

  file.mv(`${process.env.PROFILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    await Category.findByIdAndUpdate(req.params.id, { photo: file.name });

    res.status(200).json({
      success: true,
      data: file.name,
    });
  });
});

//@desc         Delete a Category
//@route        DELETE /api/v1/categories/:id
//@access       Private
exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findByIdAndRemove(req.params.id);
  res.status(200).json({ success: true, data: {} });
});
