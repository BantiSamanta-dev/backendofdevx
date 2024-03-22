import mongoose from "mongoose";
const Schema = mongoose.Schema;

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    assignee: { type: Schema.Types.ObjectId, ref: 'User' },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    status: { type: String, enum: ['todo', 'inProgress', 'done'], default: 'todo' },
    dependencies: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
    assignmentHistory: [{ 
      assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
      assignedAt: { type: Date, default: Date.now },
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
  const Task = mongoose.model('Task', taskSchema);
  
  module.exports = Task;