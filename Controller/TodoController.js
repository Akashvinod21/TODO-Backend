const Task = require('../model/listModel');

exports.addTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ isDeleted: { $ne: true } });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, isDeleted: { $ne: true } });
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.editTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, isDeleted: { $ne: true } },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ msg: 'Task not found or deleted' });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });

    if (task.isDeleted) {
      return res.status(400).json({ msg: 'Task already deleted' });
    }

    task.isDeleted = true; // <-- soft delete
    await task.save();

    res.status(200).json({ msg: 'Task marked as deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
