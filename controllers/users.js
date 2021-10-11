const path = require("path");

const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/User");

//@desc         Upload profile photo for the user
//@route        PUT /api/v1/user/photo
//@access       Private
exports.profilePhotoUpload = asyncHandler(async (req, res, next) => {
  console.log("===========");
  console.log(req.user);
  console.log("===========");
  const user = await User.findById(req.user.id);

  if (!user) {
    return next(
      new ErrorResponse(`User not found with id ${req.user.id}`, 404),
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
  file.name = `photo_${user._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.PROFILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    await User.findByIdAndUpdate(req.user.id, { photo: file.name });

    res.status(200).json({
      success: true,
      data: file.name,
    });
  });
});
