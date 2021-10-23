const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email address",
    ],
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    select: false,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  birthday: {
    type: Date,
    required: [true, "Please enter your birthday"],
  },
  phone: {
    type: String,
    match: [/^01[0-2]\d{1,8}$/, "Please add a valid phone number"],
  },
  address: {
    type: String,
    required: [true, "Please add an address"],
  },
  photo: {
    type: String,
    default: "",
  },
  disability: {
    type: mongoose.Schema.ObjectId,
    ref: "Disability",
  },
  favourites: [{ type: mongoose.Schema.ObjectId, ref: "Place" }],
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "user",
  justOne: false,
});

// Encrypt Password using bcrypt
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  if (!this.photo) {
    this.gender === "male"
      ? (this.photo = "male.jpg")
      : (this.photo = "female.jpg");
  }
});

// Match user entered password to hash password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = mongoose.model("User", UserSchema);
