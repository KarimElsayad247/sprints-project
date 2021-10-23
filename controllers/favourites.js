const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/User");

//@desc         Get All of one user favourite places
//@route        GET /api/v1/users/favourites
//@access       Private
exports.getFavourites = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).populate("favourites");

  if (!user) {
    next(new ErrorResponse(`No user found with user id ${req.user.id}`, 404));
  }

  res.status(200).json({
    success: true,
    count: user.favourites.length,
    data: user.favourites,
  });
});

//@desc         Get one favourite place of one user
//@route        GET /api/v1/user/favourites/:favouriteId
//@access       Private
exports.getFavourite = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).populate("favourites");

  if (!user) {
    next(new ErrorResponse(`User not found with id ${req.user.id}`, 404));
  }

  const favourite = user.favourites.filter(
    (favourite) => favourite.id === req.params.favouriteId,
  );

  if (!favourite) {
    next(
      new ErrorResponse(
        `Favourite not found with id ${req.params.favouriteId}`,
        404,
      ),
    );
  }

  res.status(200).json({
    success: true,
    data: favourite,
  });
});

//@desc         Post one favourite place of one user
//@route        POST /api/v1/user/favourites
//@access       Private
exports.addFavourite = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    next(new ErrorResponse(`User not found with id ${req.user.id}`, 404));
  }

  const favourite = user.favourites;

  favourite.push(req.body.favouriteId);

  const newFavourites = await User.findByIdAndUpdate(
    req.user.id,
    { favourites: favourite },
    {
      new: true,
      runValidators: true,
    },
  );

  res.status(201).json({
    success: true,
    data: newFavourites.favourites,
  });
});

//@desc         Delete a favourite place of one user
//@route        DELETE /api/v1/user/favourites/:favouriteId
//@access       Private
exports.deleteFavourite = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    next(new ErrorResponse(`User not found with id ${req.user.id}`, 404));
  }

  let favourites = user.favourites;

  if (!favourites) {
    next(
      new ErrorResponse(
        `Favourite not found with id ${req.params.favouriteId}`,
        404,
      ),
    );
  }

  favourites = favourites.filter((favourite) => {
    return favourite.toString() !== req.params.favouriteId;
  });

  await User.findByIdAndUpdate(
    req.user.id,
    { favourites },
    { new: true, runValidators: true },
  );

  res.status(200).json({
    success: true,
    data: {},
  });
});
