import mongoose, { Schema } from "mongoose"

const TasksSchema = new Schema({
  task: { type: String, required: true },
  status: { type: String, default: 'Pending', enum:['Pending', 'Done'] },
  dueDate: { type: Date, required: true },
})

export const Tasks = mongoose.model('Tasks', TasksSchema) 