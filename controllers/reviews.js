const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const Review = require("../models/Review");

//@desc         Get All Reviews of a Place
//@route        GET /api/v1/reviews
//@route        GET /api/v1/place/:placeId/reviews
//@access       Public
exports.getReviews = asyncHandler(async (req, res, next) => {
  if (req.params.placeId) {
    const reviews = await Review.find({ place: req.params.placeId });

    return res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

//@desc         Get a Single Review of a Place
//@route        GET /api/v1/place/:placeId/reviews/:reviewId
//@access       Public
exports.getReview = asyncHandler(async (req, res, next) => {
  const review = await Review.findById(req.params.reviewId).populate({
    path: "place",
  });

  if (!review) {
    return next(
      new ErrorResponse(`No review with the id of ${req.params.reviewId}`),
      404,
    );
  }

  res.status(200).json({ success: true, data: review });
});

//@desc         Add a New Comment
//@route        POST /api/v1/places/:placeId/reviews
//@access       Private
exports.addReview = asyncHandler(async (req, res, next) => {
  req.body.place = req.params.placeId;
  req.body.user = req.user.id;

  const review = await Review.create(req.body);
  res.status(201).json({ success: true, data: review });
});

//@desc         Update a Comment
//@route        PUT /api/v1/place/:placeId/comments/:commentId
//@access       Private
exports.updateComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findOneAndUpdate(
    { _id: req.params.commentId, user: req.user.id },
    commentreq.body,
    { new: true, runValidators: true },
  );

  if (!comment) {
    return next(
      new ErrorResponse(`No comment with the id of ${req.params.commentId}`),
      404,
    );
  }
  res.status(200).json({ success: true, data: comment });
});

//@desc         Delete a Comment
//@route        DELETE /api/v1/place/:placeId/comments/:commentId
//@access       Private
exports.deleteComment = asyncHandler(async (req, res, next) => {
  const isDeleted = await Comment.findOneAndRemove({
    _id: req.params.id,
    user: req.user.id,
  });

  if (!isDeleted) {
    return next(
      new ErrorResponse(`No comment with the id of ${req.params.commentId}`),
      404,
    );
  }
  res.status(200).json({ success: true, data: {} });
});
