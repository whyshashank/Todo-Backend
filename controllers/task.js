import { Task } from "../models/task.js";

export const newTask=async (req,res,next)=>{
    const {title,description} =req.body;

    await Task.create({
        title,
        description,
        user:req.user
    })

    res.status(201).json({
        success:true,
        message:"Task Added Successfully"
    })
}

export const getMyTask=async (req,res,next)=>{

    const userId= await req.user._id;
    const tasks= await Task.find({user: userId})

    res.status(200).json({
        success:true,
        tasks
    })
}

export const updateTask= async (req,res)=>{
const {id} =req.params;
 const task = await Task.findById(id);

 task.isCompleted = !task.isCompleted
 await task.save();
    
res.status(201).json({
    success:true,
    message:"Task updated successfully"
})
}

export const deleteTask =async (req,res)=>{
const {id} =  req.params;

const task = await Task.findById(id);

task.deleteOne()
    
res.status(201).json({
    success:true,
    message:"Task removed!"
})
}