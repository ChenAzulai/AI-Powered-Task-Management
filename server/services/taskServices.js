// Import mock data
const tasks = require("../data/tasks");

// Simulate fetching all tasks
const getAllTasks = async () => {
  return tasks; // Replace with DB logic later
};

// Simulate fetching a single task by ID
const getTaskById = async (id) => {
  return tasks.find((task) => task.id === id); // Replace with DB logic later
};

// Simulate adding a new task
const addTask = async (newTask) => {
  const id = tasks.length + 1; // Generate a new ID
  const task = { id, ...newTask, createdAt: new Date(), updatedAt: new Date() };
  tasks.push(task); // Modify this to save in DB later
  return task;
};

// Simulate updating a task
const updateTask = async (id, updatedData) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) return null;

  const updatedTask = { ...tasks[taskIndex], ...updatedData, updatedAt: new Date() };
  tasks[taskIndex] = updatedTask; // Modify this to update in DB later
  return updatedTask;
};

// Simulate deleting a task
const deleteTask = async (id) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) return false;

  tasks.splice(taskIndex, 1); // Modify this to delete in DB later
  return true;
};

module.exports = { getAllTasks, getTaskById, addTask, updateTask, deleteTask };
