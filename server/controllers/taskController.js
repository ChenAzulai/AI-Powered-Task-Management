let tasks = []; // In-memory tasks

exports.getTasks = (req, res) => {
  res.json(tasks);
};

exports.createTask = (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: tasks.length + 1, title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
};
