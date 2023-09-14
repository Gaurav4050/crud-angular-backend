const Task = require("../models/task");
// addTask
exports.addTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get specific task
exports.getTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

// update task
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const [updated] = await Task.update(req.body, {
    where: { id },
  });

  if (updated) {
    const updatedTask = await Task.findByPk(id);
    res.json(updatedTask);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

// delete task
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  const deleted = await Task.destroy({
    where: { id },
  });

  if (deleted) {
    res.json({ message: "Task deleted" });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};
