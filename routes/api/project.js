const express = require('express')
const { short } = require('webidl-conversions')
const router = express.Router()
const ProjectControllers = require("../../controllers/ProjectController");
const Project = require('../../models/project')


// add  new project
router.post("/addProject", ProjectControllers.addProject);

// get all project
router.get("/getAllprojects", ProjectControllers.getAllprojects);
/*
// get one project
router.get("/getOneclients", ClientControllers.getOneclient);
*/
// update one project
router.patch("/updateProject/:id", ProjectControllers.updateProject);

// delete  project
router.patch("/deleteProject/:id",ProjectControllers.deleteProject)

module.exports=router;