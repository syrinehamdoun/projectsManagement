// Controller functions come here
const Tache = require('../models/tache')
const mongoose = require("mongoose");

const TacheControllers = {};

// Add new tache
TacheControllers.addTache = async (req, res) => {
  console.log(req.body)
  //assignedTo this.createdBy = createdBy;
     // this.deadline=deadline;
  try {
    const tache = await new Tache({
        _id: mongoose.Types.ObjectId(),
        title : req.body.title,
        description : req.body.description,
        status : req.body.status,
        date_creation : req.body.date_creation,
        assignedTo : req.body.assignedTo,
        createdBy : req.body.createdBy,
        deadline : req.body.deadline,
    });

    await tache.save();
    res.status(201).json({ message: "New tache being added ✅", tache });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// GET all taches
TacheControllers.getAlltaches = async (req, res) => {
  try {
    const taches = await Tache.find();
    console.log(taches)
    res.status(200).json(taches);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};


// GET all clients
TacheControllers.getAlltaches = async (req, res) => {
  try {
    const taches = await Tache.find();
    for(var i =0 ;i<taches.length;i++){
      if(taches[i].deleted==true){
        taches.splice(i,1)
      }
    }
    res.status(200).json(taches);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};

// update tache

//update status task
TacheControllers.updateTache= async (req, res) => {
  console.log(req.body)

    try {
        await Tache.findByIdAndUpdate(req.params.id, {
            $set: {
              title : req.body.title,
              description : req.body.description,
              status : req.body.status,
              date_creation : req.body.date_creation,
              assignedTo : req.body.assignedTo,
              createdBy : req.body.createdBy,
              deadline : req.body.deadline,          
            },
          });
        const tache = await Tache.findById(req.query.id);
        res.status(201).json({ message: "New client being updated ✅", tache });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
};


//delete tache
TacheControllers.deletetache= async (req, res) => {
    try {
        await Tache.findByIdAndUpdate(req.params.id, {
            $set: {
                deleted : req.body.deleted
            },
          });
        const tache = await Tache.findById(req.query.id);
        res.status(201).json({ message: "New Project being added ✅", tache });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
};


//update status task
TacheControllers.UpdateStatustache= async (req, res) => {
  console.log(req.body)

    try {
        await Tache.findByIdAndUpdate(req.params.id, {
            $set: {
              status : req.body.status          
            },
          });
        const tache = await Tache.findById(req.query.id);
        res.status(201).json({ message: "New tache being updated ✅", tache });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
};


//getOneByID
TacheControllers.getOnetache = async (req, res) => {
  console.log(req.query.id);
  try {
    const tache = await Tache.findById(req.query.id);
    res.status(200).json({ message: "tache", tache });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


module.exports = TacheControllers;
