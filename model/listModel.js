const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  deadline: { type: Date, required: true },
  priority: { type: Number, required: true },
  completed: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false } // <-- soft delete flag
});

const Task = mongoose.model('TodoLists', taskSchema);

module.exports = Task;
