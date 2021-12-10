// Controller functions come here
const { User } = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { createToken } = require("../JWT-check");

const UserControllers = {};

// Add new User
UserControllers.addUser = async (req, res) => {
  // //avatar: req.file.path,
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await new User({
      _id: mongoose.Types.ObjectId(),
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      phone: req.body.phone,
      address: req.body.address,
      city: req.body.city,
      admin: req.body.admin,
      state: req.body.state,
      zip: req.body.zip,
      country: req.body.country,
     
    });

    await user.save();
    res.status(201).json({ message: "New user being added ✅", user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// GET all users
UserControllers.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};

// Login
UserControllers.login = async (req, res) => {
  let username = req.body.login.userName;
  let password = req.body.login.password;
  console.log(req.body)
  const user = await User.findOne({ username });
  console.log(user)
  if (user == null) {
    return res.json({
      auth: false,
      message: "Not Allowed, please check your username or password",
    });
    //return res.status(404).json({ message: "Cannot find user" });
  }
  try {
    console.log(await bcrypt.compare(password, user.password))
    if (await bcrypt.compare(password, user.password)) {
      const token = createToken(user);
      console.log(token)
      req.session.user = user;
      await res
        .header("auth", token)
        .json({
          auth: true,
            token,
            admin: user.admin,
            email: user.email,
            phone: user.phone,
            address: user.address,
            city: user.city,
            state: user.state,
            zip: user.zip,
            country: user.country,
            password: user.password,
            userName: user.username,
          
        });
    } else {
      res.json({
        auth: false,
        message: "Not Allowed, please check your username or password",
      });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// logout
UserControllers.logout = async (req, res) => {
  res.cookie("token", "", { maxAge: 1 });
  res.redirect("");
};
// deleteUser
UserControllers.deleteUser = async (req, res) => {
  //console.log(req.query.id);
  try {
    const user = await User.findByIdAndDelete(req.query.id);
    res.status(200).json({ message: "this user been deleted", user });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
//getOneByID
UserControllers.getOneUser = async (req, res) => {
  console.log(req.query.id);
  try {
    const user = await User.findById(req.query.id);
    res.status(200).json({ message: "user", user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

UserControllers.getDate = async (req, res) => {
  res.status(200).json("welcome to leader");
};
module.exports = UserControllers;
