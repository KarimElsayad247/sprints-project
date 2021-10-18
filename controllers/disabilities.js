const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const Disability = require("../models/Disability");

//@desc         Get All Disabilities
//@route        GET /api/v1/disabilities
//@access       Public
exports.getAllDisabilities = asyncHandler(async (req, res, next) => {
  const Disabilities = await Disability.find();

  res.status(200).json({
    success: true,
    count: Disabilities.length,
    data: Disabilities,
  });
});

//@desc         Add a New Disability
//@route        POST /api/v1/disabilities
//@access       Private
exports.addDisability = asyncHandler(async (req, res, next) => {
  const Disability = await Disability.create({ name: req.body.name });

  res.status(200).json({
    success: true,
    data: Disability,
  });
});

//@desc         Update a Disability Info
//@route        PUT /api/v1/disabilities/:id
//@access       Private
exports.updateDisability = asyncHandler(async (req, res, next) => {
  const Disability = await Disability.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    {
      new: true,
      runValidators: true,
    },
  );

  res.status(200).json({
    success: true,
    data: Disability,
  });
});

//@desc         Delete a Disability
//@route        DELETE /api/v1/disabilities/:id
//@access       Private
exports.deleteDisability = asyncHandler(async (req, res, next) => {
  const Disability = await Disability.findByIdAndRemove(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
});
