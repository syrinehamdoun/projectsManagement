const express = require('express')
const { short } = require('webidl-conversions')
const router = express.Router()
const ClientControllers = require("../../controllers/ClientController");
const Client = require('../../models/Client.module')


// add  new task
router.post("/addClient", ClientControllers.addClient);

// get all tasks
router.get("/getAllclients", ClientControllers.getAllclients);

// get one tasks
router.get("/getOneclients", ClientControllers.getOneclient);

// get one tasks
//router.put("/updateStatusClient", ClientControllers.UpdateStatusclient);

// delete  tasks
//router.delete("/deleteClient", ClientControllers.deleteclient);
router.patch("/deleteClient/:id",ClientControllers.deleteclient)

module.exports=router;