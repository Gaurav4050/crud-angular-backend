const express = require("express");
const app = express.Router();

const {
  addTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");

// GET all tasks
app.post("/tasks", addTask);

app.get("/tasks", getTasks);

app.get("/tasks/:id", getTask);

app.put("/tasks/:id", updateTask);

app.delete("/tasks/:id", deleteTask);

module.exports = app;
