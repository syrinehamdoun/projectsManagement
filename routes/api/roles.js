const express = require('express')
const { short } = require('webidl-conversions')
const router = express.Router()
const RoleControllers = require("../../controllers/RoleController");
const Role = require('../../models/role')


// add  new Role
router.post("/addRole", RoleControllers.addRole);

// get all Role
router.get("/getAllroles", RoleControllers.getAllroles);

// get one Role
router.get("/getOneroles", RoleControllers.getOnerole);

// update one Role
router.patch("/updateRole/:id", RoleControllers.updateRole);

// delete  Role
router.patch("/deleteRole/:id",RoleControllers.deleterole)

module.exports=router;