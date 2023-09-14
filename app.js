// app.js
const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const config = require("./config");
const bodyParser = require("body-parser");
const taskroutes = require("./routes/task");
const cors = require("cors");

app.use(cors());
// Sequelize Setup
const sequelize = new Sequelize(config.production);

sequelize.define("Tasks", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  dob: Sequelize.STRING,
  gender: Sequelize.STRING,
  education: Sequelize.STRING,
  company: Sequelize.STRING,
  experience: Sequelize.STRING,
  package: Sequelize.INTEGER,
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });

sequelize
  .sync()
  .then(() => {
    console.log("Tables are synchronized");
  })
  .catch((error) => {
    console.error("An error occurred while synchronizing tables:", error);
  });

// Middleware
app.use(bodyParser.json());

// Routes
app.use(taskroutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
