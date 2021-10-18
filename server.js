const path = require("path");

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/database");
const usersRoutes = require("./routes/users");
const placesRoutes = require("./routes/places");
const disabilitiesRoutes = require("./routes/disabilities");
const authRoutes = require("./routes/auth");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Cookie parser
app.use(cookieParser());

// File Uploading
app.use(fileUpload());

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", usersRoutes);
app.use("/api/v1", placesRoutes);
app.use("/api/v1", disabilitiesRoutes);
app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold,
  ),
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit
  server.close(() => process.exit(1));
});
