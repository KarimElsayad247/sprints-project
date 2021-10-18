const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const Comment = require("../models/Comment");

//@desc         Get All Comments of a Place
//@route        GET /api/v1/place/:placeId/comments
//@access       Public
exports.getComments = asyncHandler(async (req, res, next) => {
  const comments = await Comment.find({ place: req.params.placeId }).populate({
    path: "user",
    select: "name",
  });
  res
    .status(200)
    .json({ success: true, count: comments.length, data: comments });
});

//@desc         Get a Single Comment of a Place
//@route        GET /api/v1/place/:placeId/comments/:commentId
//@access       Public
exports.getComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findOne({
    place: req.params.placeId,
    _id: req.params.commentId,
  }).populate({
    path: "user",
    select: "name",
  });

  if (!comment) {
    return next(
      new ErrorResponse(`No comment with the id of ${req.params.commentId}`),
      404,
    );
  }

  res.status(200).json({ success: true, data: comment });
});

//@desc         Add a New Comment
//@route        POST /api/v1/place/:placeId/comments
//@access       Private
exports.addComment = asyncHandler(async (req, res, next) => {
  const { title, body } = req.body;

  const comment = await Comment.create({
    title,
    body,
    user: req.user.id,
    place: req.params.placeId,
  });
  res.status(200).json({ success: true, data: comment });
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
