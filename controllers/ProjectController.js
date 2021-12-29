// Controller functions come here
const Project = require('../models/project')
const mongoose = require("mongoose");

const ProjectControllers = {};

// Add new Project
ProjectControllers.addProject = async (req, res) => {
  console.log(req.body)
  try {
    const project =  new Project({
        _id:mongoose.Types.ObjectId(),
        client : req.body.newProject.client,
        description : req.body.newProject.description,
        remarque : req.body.newProject.remarque,
        type : req.body.newProject.type,
        status : req.body.newProject.status,
        date_debut : req.body.newProject.date_debut,
        date_fin : req.body.newProject.date_fin,
    });

    await project.save();
    res.status(201).json({ message: "New project being added ✅", project });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// GET all clients
ProjectControllers.getAllprojects = async (req, res) => {
  try {
    const projects = await Project.find();
    for(var i =0 ;i<projects.length;i++){
      if(projects[i].deleted==true){
        projects.splice(i,1)
      }
    }
    for(var i =0 ;i<projects.length;i++){
      console.log(projects[i].deleted)
    }
    res.status(200).json(projects);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};


//update status task
ProjectControllers.updateProject= async (req, res) => {
  console.log(req.body)

    try {
        await Project.findByIdAndUpdate(req.params.id, {
            $set: {
              client : req.body.updateProject.client,
              description : req.body.updateProject.description,
              remarque : req.body.updateProject.remarque,
              type : req.body.updateProject.type,
              status : req.body.updateProject.status,
              date_debut : req.body.updateProject.date_debut,
              date_fin : req.body.updateProject.date_fin,            
            },
          });
        const project = await Project.findById(req.query.id);
        res.status(201).json({ message: "New client being updated ✅", project });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
};
ProjectControllers.deleteProject= async (req, res) => {
  console.log(req.body)

    try {
        await Project.findByIdAndUpdate(req.params.id, {
            $set: {
                deleted : req.body.deleted
            },
          });
        const project = await Project.findById(req.query.id);
        res.status(201).json({ message: "New Project being added ✅", project });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
};

//getOneByID
ProjectControllers.getOneProject = async (req, res) => {
  console.log(req.query.id);
  try {
    const project = await Project.findById(req.query.id);
    res.status(200).json({ message: "Project", project });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


module.exports = ProjectControllers;
