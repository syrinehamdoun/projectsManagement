const express = require('express')
const { short } = require('webidl-conversions')
const router = express.Router()
const TimesheetControllers = require("../../controllers/TimesheetController");
const Timesheet = require('../../models/timesheet')


// add  new timesheet
router.post("/addTimesheet", TimesheetControllers.addTimesheet);

// get all timesheet
router.get("/getAllTimesheets", TimesheetControllers.getAlltimesheets);

// update one timesheet
router.patch("/updateTimesheet/:id", TimesheetControllers.updateTimesheet);

// delete  timesheet
router.patch("/deleteTimesheet/:id",TimesheetControllers.deleteTimesheet)

module.exports=router;