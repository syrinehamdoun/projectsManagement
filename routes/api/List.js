//express work
const express = require('express')
const { request } = require('http')
const router = express.Router()
//load mongoose models
const {List} = require('../../models/List.module')
router.get("/lists",(req,res)=>{
    List.find({}).then((lists)=>{
        res.send(lists)
            })

})
router.post("/lists",(req,res)=>{
    let title = req.body.title;
    let newList = new List({
        title
    })
    newList.save().then((listDoc)=>{
   res.send(listDoc);
    })
   })
router.patch("/lists/:id",(req,res)=>{
   List.findOneAndUpdate({_id: req.params.id},{
       $set: req.body
   }).then(()=>{
res.sendStatus(200);
   })

})
router.delete("/delete/lists/:id",(req,res)=>{
    List.findOneAndDelete({_id: req.params.id},{

    }).then((removeListDoc)=>{
        res.send(removeListDoc);
           })


})
module.exports= router