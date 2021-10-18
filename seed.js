const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const Disability = require("./models/Disability");
const Category = require("./models/Category");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
});

const disabilities = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "data/Disabilities.json"), "utf8"),
);

const categories = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "data/Categories.json"), "utf8"),
);

// Imports into DB
const importData = async () => {
  try {
    await Disability.create(disabilities);
    await Category.create(categories);
    console.log("Data Imported...".green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete Data
const deleteData = async () => {
  try {
    await Disability.deleteMany();
    await Category.deleteMany();
    console.log("Data Destroyed...".red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
