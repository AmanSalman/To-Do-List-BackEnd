import { Tasks } from "../../../DB/models/Tasks.model.js";
import { User } from "../../../DB/models/User.model.js";

export const GetUserTasks = async (req, res, next) => {
  const user = await User.findById(req.user._id)
  if(!user.tasks) return res.status(404).json({message:'No tasks found'})
  return res.status(200).json({message:'success', tasks:user.tasks})
}


export const create = async (req,res,next) =>{
  const saveTask = new Tasks(req.body)
  await saveTask.save()
  const user = await User.findById(req.user._id)
  user.tasks.push(saveTask._id)
  await user.save()
  return res.status(201).json({message:"success", task:saveTask})
}


export const update = async (req, res, next) => {
  const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {new: true})
  if(!task) return res.status(404).json({message:'Task not found'})
  return res.status(200).json({message:'success', task})
}


export const getTask = async (req,res,next) =>{
  const {id} = req.params
  const task = await Tasks.findById(id)
  if(!task) return res.status(404).json({message:'Task not found'})
  return res.status(200).json({message:'success', task})
}


export const changeStatus = async (req,res,next) =>{
  const {id} = req.params
  const {status} = req.body
  const task = await Tasks.findByIdAndUpdate(id, {status:status}, {new : true})
  if(!task) return res.status(404).json({message:'Task not found'})
    console.log('Task updated')
  return res.status(200).json({message:'success', task})
}


export const getTasksByStatus = async(req, res) =>{
  const {status} = req.body
  const user = await User.findById(req.user._id)
  const tasks = user.tasks.filter(task => task.status === status)
  if(!tasks) return res.status(404).json({message:'No tasks found'})
  return res.status(200).json({message:'success', tasks})
}

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(req.user._id);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const task = await Tasks.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    user.tasks = user.tasks.filter(taskId => taskId != id);
    
    await user.save(); 
    
    return res.json({message:'success'});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
