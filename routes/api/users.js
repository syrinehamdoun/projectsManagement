var express = require("express");
var router = express.Router();
const UserControllers = require("../../controllers/UserController");
const middleware = require("../../middlewares/middleware");
//user route

// register https://projects-management-itbs.herokuapp.comuser/register
//router.post("/register", middleware.validator, UserControllers.addUser);
router.post("/register",middleware.validator ,UserControllers.addUser);

// login https://projects-management-itbs.herokuapp.com/user/login
router.post("/login", UserControllers.login);

// delete  tasks
router.patch("/deleteUser/:id",UserControllers.deleteUser)


// register https://projects-management-itbs.herokuapp.com/user/logout
router.get("/logout", UserControllers.logout);

//the login and the logout part and checkAuth works only on the browser
router.get("/checkAuth", middleware.checkToken);

//get All user
router.get("/", UserControllers.getAllUsers);

//get profil by id
router.get("/profil",UserControllers.getOneUser)
module.exports = router;
