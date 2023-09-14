// Define Task model

const Sequelize = require("sequelize");
const config = require("../config");
const sequelize = new Sequelize(config.production);

const Task = sequelize.define("Tasks", {
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

module.exports = Task;
