//  population and ref
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  username: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    //match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true,
    unique: true,
  },
  admin: Boolean,
  
  password: { type: String, required: true },
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    index: true,
  },
  avatar: String,
  phone: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  role: { type: Number },
  zip: { type: String },
  deleted: {
		type: Boolean,
		default:0
	},
  country: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
userSchema.statics.getUserById = function(id, callback) {
  User.findById(id, callback);
}

userSchema.statics.getUserByUsername =function(username, callback) {
  let query = {username: username};
  User.findOne(query, callback);
}

userSchema.statics.getUsers = () => {
  return User.find({}, '-password');
}

userSchema.statics.addUser = function(newUser, callback) {
  User.getUserByUsername(newUser.username, (err, user) => {
    if (err) return callback({msg: "There was an error on getting the user"});
    if (user) {
      let error = {msg: "Username is already in use"};
      return callback(error);
    } else {
      bcryptjs.genSalt(10, (err, salt) => {
        bcryptjs.hash(newUser.password, salt, (err, hash) => {
          if (err) return callback({msg: "There was an error registering the new user"});

          newUser.password = hash;
          newUser.save(callback);
        });
      });
    }
  });
};

userSchema.statics.authenticate = function(username, password, callback) {
  User.getUserByUsername(username, (err, user) => {
    if (err) return callback({msg: "There was an error on getting the user"});
    if (!user) {
      let error = {msg: "Wrong username or password"};
      return callback(error);
    } else {
      bcryptjs.compare(password, user.password, (err, result) => {
        if (result == true) {
          return callback(null, user);
        } else {
          let error = {msg: "Wrong username or password"};
          return callback(error);
        }
      });
    }
  });
};

const User = mongoose.model("User", userSchema);


module.exports = {User} ;