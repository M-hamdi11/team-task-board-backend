import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Title is required'], trim: true },
    description: { type: String, default: '', trim: true },
    assignee: { type: String, default: '', trim: true },
    dueDate: { type: String, default: '' },
    status: {
      type: String,
      enum: ['todo', 'inprogress', 'done'],
      default: 'todo',
    },
  },
  { timestamps: true }
)

const taskmodel = mongoose.model('Task', taskSchema)
export default taskmodel