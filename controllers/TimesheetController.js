// Controller functions come here
const Timesheet = require('../models/timesheet.js')
const mongoose = require("mongoose");

const TimesheetControllers = {};

// Add new Timesheet
TimesheetControllers.addTimesheet = async (req, res) => {
  console.log(req.body)
  try {
    const timesheet =  new Timesheet({
        _id:mongoose.Types.ObjectId(),
        employee : req.body.employee,
        project : req.body.project,
        description : req.body.description,
        date : req.body.date,
        starttime : req.body.starttime,
        endtime : req.body.endtime,
    });

    await timesheet.save();
    res.status(201).json({ message: "New timesheet being added ✅", timesheet });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// GET all clients
TimesheetControllers.getAlltimesheets = async (req, res) => {
  try {
    const timesheets = await Timesheet.find();
    for(var i =0 ;i<timesheets.length;i++){
      if(timesheets[i].deleted==true){
        timesheets.splice(i,1)
      }
    }
    for(var i =0 ;i<timesheets.length;i++){
      console.log(timesheets[i].deleted)
    }
    res.status(200).json(timesheets);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};


//update status task
TimesheetControllers.updateTimesheet= async (req, res) => {
  console.log(req.body)

    try {
        await Timesheet.findByIdAndUpdate(req.params.id, {
            $set: {
              description : req.body.updateTimesheet.description,
              status : req.body.updateTimesheet.status,
              date_debut : req.body.updateTimesheet.date_debut,
              date_fin : req.body.updateTimesheet.date_fin,            
            },
          });
        const timesheet = await Timesheet.findById(req.query.id);
        res.status(201).json({ message: "New client being updated ✅", timesheet });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
};
TimesheetControllers.deleteTimesheet= async (req, res) => {
  console.log(req.body)

    try {
        await Timesheet.findByIdAndUpdate(req.params.id, {
            $set: {
                deleted : req.body.deleted
            },
          });
        const timesheet = await Timesheet.findById(req.query.id);
        res.status(201).json({ message: "New Timesheet being added ✅", timesheet });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
};

//getOneByID
TimesheetControllers.getOneTimesheet = async (req, res) => {
  console.log(req.query.id);
  try {
    const timesheet = await Timesheet.findById(req.query.id);
    res.status(200).json({ message: "Timesheet", timesheet });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


module.exports = TimesheetControllers;
