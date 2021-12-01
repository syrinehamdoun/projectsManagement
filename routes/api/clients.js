const express = require('express')
const { short } = require('webidl-conversions')
const router = express.Router()
const ClientControllers = require("../../controllers/ClientController");
const Client = require('../../models/Client.module')


// add  new client
router.post("/addClient", ClientControllers.addClient);

// get all client
router.get("/getAllclients", ClientControllers.getAllclients);

// get one tasks
router.get("/getOneclients", ClientControllers.getOneclient);

// update one client
router.patch("/updateClient/:id", ClientControllers.updateClient);

// delete  tasks
router.patch("/deleteClient/:id",ClientControllers.deleteclient)

module.exports=router;