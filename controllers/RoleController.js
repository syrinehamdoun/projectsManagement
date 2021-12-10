// Controller functions come here
const Role = require('../models/role')
const mongoose = require("mongoose");

const RoleControllers = {};

// Add new role
RoleControllers.addRole = async (req, res) => {
  console.log(req.body)
  try {
    const role =  new Role({
      _id:mongoose.Types.ObjectId(),
        title : req.body.role.title,
    });
    await role.save();
    res.status(201).json({ message: "New role being added ✅", role });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// GET all role
RoleControllers.getAllroles = async (req, res) => {
  try {
    const roles = await Role.find();
    for(var i =0 ;i<roles.length;i++){
      if(roles[i].deleted==true){
        roles.splice(i,1)
      }
    }
    for(var i =0 ;i<roles.length;i++){
      console.log(roles[i].deleted)
    }
    res.status(200).json(roles);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};


RoleControllers.updateRole= async (req, res) => {
  console.log(req.body)

    try {
        await Role.findByIdAndUpdate(req.params.id, {
            $set: {
              title : req.body.role.title
              },
          });
        const role = await Role.findById(req.query.id);
        res.status(201).json({ message: "New role being updated ✅", role });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
};
RoleControllers.deleterole= async (req, res) => {
  console.log(req.body)

    try {
        await Role.findByIdAndUpdate(req.params.id, {
            $set: {
                deleted : req.body.deleted
            },
          });
        const role = await Role.findById(req.query.id);
        res.status(201).json({ message: "New role being added ✅", role });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
};

//getOneByID
RoleControllers.getOnerole = async (req, res) => {
  console.log(req.query.id);
  try {
    const role = await Role.findById(req.query.id);
    res.status(200).json({ message: "role", role });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


module.exports = RoleControllers;
