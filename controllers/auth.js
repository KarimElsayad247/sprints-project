const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/User");

//@desc         Register user
//@route        POST /api/v1/auth/register
//@access       Public
exports.register = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  sendTokenResponse(user, 200, res);
});

//@desc         Login user
//@route        POST /api/v1/auth/login
//@access       Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  // check for user
  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  // check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  sendTokenResponse(user, 200, res);
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
  });
};

//@desc         Get current logged in user
//@route        POST /api/v1/auth/me
//@access       Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

//@desc         Update current logged in user profile
//@route        PUT /api/v1/auth/me
//@access       Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
  let user = await User.findById(req.user.id).select("+password");
  if (req.body.oldPassword) {
    const isMatch = await user.matchPassword(req.body.oldPassword);
    if (!isMatch) {
      return next(new ErrorResponse("Invalid Old Password", 401));
    }
  }
  user = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
    runValidators: true,
  });

  user.save();

  if (req.body.password) {
    // Create token
    const token = user.getSignedJwtToken();

    const options = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
      ),
      httpOnly: true,
    };

    if (process.env.NODE_ENV === "production") {
      options.secure = true;
    }

    return res.status(200).json({
      success: true,
      data: user,
      token,
    });
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});
