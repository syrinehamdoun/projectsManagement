// Controller functions come here
const Client = require('../models/Client.module')
const mongoose = require("mongoose");

const ClientControllers = {};

// Add new client
ClientControllers.addClient = async (req, res) => {
  console.log(req.body)
  try {
    const client =  new Client({
      _id:mongoose.Types.ObjectId(),
        nom : req.body.newClient.nom,
        prenom : req.body.newClient.prenom,
        phone : req.body.newClient.phone,
        mail : req.body.newClient.mail,
    });

    await client.save();
    res.status(201).json({ message: "New client being added ✅", client });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// GET all clients
ClientControllers.getAllclients = async (req, res) => {
  try {
    const clients = await Client.find();
    for(var i =0 ;i<clients.length;i++){
      if(clients[i].deleted==true){
        clients.splice(i,1)
      }
    }
    for(var i =0 ;i<clients.length;i++){
      console.log(clients[i].deleted)
    }
    res.status(200).json(clients);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};

// deleteclient
/*ClientControllers.deleteclient = async (req, res) => {
  try {
    await Client.findByIdAndUpdate(req.params.id, {
        $set: {
            status : req.body.status
        },
      });
    const client = await Client.findById(req.params.id);
    res.status(201).json({ message: "New client being updated ✅", client });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }*/
//update status task
ClientControllers.updateClient= async (req, res) => {
  console.log(req.body)

    try {
        await Client.findByIdAndUpdate(req.params.id, {
            $set: {
              nom : req.body.clientUpdated.nom,
              prenom : req.body.clientUpdated.prenom,
              phone : req.body.clientUpdated.phone,
              mail : req.body.clientUpdated.mail,            },
          });
        const client = await Client.findById(req.query.id);
        res.status(201).json({ message: "New client being updated ✅", client });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
};
ClientControllers.deleteclient= async (req, res) => {
  console.log(req.body)

    try {
        await Client.findByIdAndUpdate(req.params.id, {
            $set: {
                deleted : req.body.deleted
            },
          });
        const client = await Client.findById(req.query.id);
        res.status(201).json({ message: "New client being added ✅", client });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
};

//getOneByID
ClientControllers.getOneclient = async (req, res) => {
  console.log(req.query.id);
  try {
    const client = await Client.findById(req.query.id);
    res.status(200).json({ message: "client", client });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


module.exports = ClientControllers;
