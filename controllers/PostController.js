// Controller functions come here
const Post = require('../models/post')
const mongoose = require("mongoose");

const PostControllers = {};


// Add new post
PostControllers.addPost = async (req, res) => {
  try {
    const post = await new Post({
        _id: mongoose.Types.ObjectId(),
        title : req.body.title,
        description : req.body.description,
        date_creation : req.body.date_creation,
    });
    await post.save();
    res.status(201).json({ message: "New Post being added ✅", post });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// GET all posts
PostControllers.getAllposts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};

// deletepost
PostControllers.deletepost = async (req, res) => {
  //console.log(req.query.id);
  try {
    const post = await Post.findByIdAndDelete(req.query.id);
    res.status(200).json({ message: "this Post been deleted", post });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
//update  post
PostControllers.UpdatePost= async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.query.id;

  Post.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Post with id=${id}. Maybe Post was not found!`
        });
      } else res.send({ message: "Post was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Post with id=" + id
      });
    });
    // try {
    //     await Post.description(req.params.id, {
    //         $set: {
    //           description : req.body.description
    //         },
    //       });
    //       console.log(req.query.id);
    //     const post = await Post.findById(req.query.id);
    //     res.status(201).json({ message: "Post  updated ✅", post });
    //   } catch (err) {
    //     res.status(400).json({ message: err.message });
    //   }
};

//getOneByID
PostControllers.getOnepost = async (req, res) => {
  console.log(req.query.id);
  try {
    const post = await Post.findById(req.query.id);
    res.status(200).json({ message: "Post", post });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


module.exports = PostControllers;
