const express = require("express");
const router = express.Router();
const taskService = require("../services/taskServices");

// Get all tasks
router.get("/", async (req, res) => {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
});

// Get a task by ID
router.get("/:id", async (req, res) => {
  const task = await taskService.getTaskById(Number(req.params.id));
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
});

// Add a new task
router.post("/", async (req, res) => {
  const newTask = req.body;
  const task = await taskService.addTask(newTask);
  res.status(201).json(task);
});

// Update a task
router.put("/:id", async (req, res) => {
  const updatedTask = await taskService.updateTask(Number(req.params.id), req.body);
  if (!updatedTask) return res.status(404).json({ message: "Task not found" });
  res.json(updatedTask);
});

// Delete a task
router.delete("/:id", async (req, res) => {
  const success = await taskService.deleteTask(Number(req.params.id));
  if (!success) return res.status(404).json({ message: "Task not found" });
  res.status(204).send();
});

module.exports = router;
