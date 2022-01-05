const express = require('express')
const { short } = require('webidl-conversions')
const router = express.Router()
const PostControllers = require("../../controllers/PostController");
const Post = require('../../models/post');

// add  new task
router.post("/addPost", PostControllers.addPost);

// get all tasks
router.get("/getAllposts", PostControllers.getAllposts);

// get one tasks
router.get("/getOnepost", PostControllers.getOnepost);

// get one tasks
router.put("/UpdatePost", PostControllers.UpdatePost);

// delete  tasks
router.delete("/deletepost", PostControllers.deletepost);









module.exports=router;