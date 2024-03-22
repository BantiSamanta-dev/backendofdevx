import mongoose from "mongoose";
const Schema = mongoose.Schema;

const taskBoardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const TaskBoard = mongoose.model('TaskBoard', taskBoardSchema);

module.exports = TaskBoard;