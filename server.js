const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
const morgan = require("morgan");
const colors = require('colors');
const connectDb = require('./config/db');
//load all routes file
const bootcamps = require("./routes/bootcamps");

//end of routes file

//load env var
dotenv.config({
  path: "./config/config.env",
});
//end of env file loading
//connect mongoDb
connectDb();

const app = express();

const PORT = process.env.PORT || 5000;

//Dev Logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Mount all route files
app.use("/api/v1/bootcamps", bootcamps);
//end of mount route files
// use body parse 
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome from express!",
  });
});
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold)
);
