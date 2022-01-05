const express = require('express')
const { short } = require('webidl-conversions')
const router = express.Router()
const TacheControllers = require("../../controllers/TacheController");
const Tache = require('../../models/tache')


// add  new task
router.post("/addTache", TacheControllers.addTache);

// get all tasks
router.get("/getAlltaches", TacheControllers.getAlltaches);

// get one tasks
router.get("/getOnetaches", TacheControllers.getOnetache);


// update one tache
router.patch("/UpdateStatustache/:id", TacheControllers.UpdateStatustache);


// update one tache
router.patch("/updateTache/:id", TacheControllers.updateTache);



// delete  tasks
router.patch("/deletetache/:id",TacheControllers.deletetache)

//router.delete("/deletetache", TacheControllers.deletetache);









module.exports=router;