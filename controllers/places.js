const crypto = require("crypto");
const path = require("path");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const Place = require("../models/Place");

//@desc         Get Places of a Category
//@route        GET /api/v1/palces
//@route        GET /api/v1/categories/:categoryId/places
//@access       Public
exports.getPlaces = asyncHandler(async (req, res, next) => {
  if (req.params.categoryId) {
    const places = await Place.find({ category: req.params.categoryId }).sort(
      req.query.sort || "name",
    );

    // res.status(200).json(res.advancedResults);

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
  const place = await Place.findById(req.params.placeId).populate({
    path: "category",
  });

  if (!place) {
    return next(
      new ErrorResponse(`No place with the id of ${req.params.id}`),
      404,
    );
  }

  res.status(200).json({
    success: true,
    data: place,
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

//@desc         Upload a Place Photo Gallery
//@route        PUT /api/v1/categories/:categoryId/places/:placeId/gallery
//@access       Private
exports.uploadPlacePhotoGallery = asyncHandler(async (req, res, next) => {
  const place = await Place.findById(req.params.placeId);

  if (!place) {
    return next(
      new ErrorResponse(`Place not found with id ${req.params.placeId}`, 404),
    );
  }

  if (!req.files) {
    return next(new ErrorResponse(`Please upload a images`, 400));
  }

  const files = Object.values(req.files);

  let images = [];
  images = place.gallery;
  let promise = [];

  files.forEach((file) => {
    promise.push(
      new Promise((resolve, reject) => {
        // Make sure that the image is a photo
        if (!file.mimetype.startsWith("image/")) {
          return next(new ErrorResponse(`Please upload only image files`, 400));
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

        file.mv(
          `${process.env.PLACE_GALLERY_UPLOAD_PATH}/${file.name}`,
          async (err) => {
            if (err) {
              console.error(err);
              return next(new ErrorResponse(`Problem with file upload`, 500));
            }
            images.push(file.name);
          },
        );
        resolve(file.name);
      }),
    );
  });

  Promise.all(promise).then(async (images) => {
    await Place.findByIdAndUpdate(req.params.placeId, { gallery: images });
    res.status(200).json({
      success: true,
      data: images,
    });
  });
});

//@desc         Delete a Place
//@route        DELETE /api/v1/categories/:categoryId/places/:placeId
//@access       Private
exports.deletePlace = asyncHandler(async (req, res, next) => {
  await Place.findByIdAndRemove(req.params.placeId);
  res.status(200).json({ success: true, data: {} });
});
