//express work
const express = require('express')
const { request } = require('http')
const router = express.Router()
//load mongoose models
const {Task} = require('../../models/task.module')
router.get("/tasks",(req,res)=>{
    Task.find({}).then((tasks)=>{
        res.send(tasks)
            })

})
router.post("/:listId/tasks",(req,res)=>{
    let title = req.body.title;
    let newTask = new Task({
        title,
        _listId:req.params.listId
    })
    newTask.save().then((taskDoc)=>{
   res.send(taskDoc);
    })
   })
router.patch("/tasks/:id/:listId",(req,res)=>{
    Task.findOneAndUpdate({_id: req.params.id, _listId:req.params.listId},{
       $set: req.body
   }).then(()=>{
res.sendStatus(200);
   })

})
router.delete("/delete/tasks/:id/:listId",(req,res)=>{
    Task.findOneAndDelete({_id: req.params.id, _listId:req.params.listId},{

    }).then((removeTaskDoc)=>{
        res.send(removeTaskDoc);
           })


})
module.exports= router