const mongoose =require('mongoose')
const Schema=mongoose.Schema

const User = require('../models/user')

const TacheShema= new Schema({

	//assignedTo this.createdBy = createdBy;
     // this.deadline=deadline;
	_id: Schema.Types.ObjectId,

	assignedTo	: {
		type: Schema.Types.ObjectId, 
		ref: "User"
	},
	createdBy	: {
		type: Schema.Types.ObjectId, 
		ref: "User"
	},
	deadline: {
		type: Date,
	},
	title: {
		type: String,
	},
	description: {
		type: String,
	},
    remarque: {
        type: String,
    },
    status: {
        type: String,
    },
	date_creation: {
		type:Date,
		default:Date.now
	},
    deleted: {
		type: Boolean,
		default:0
	}


})
module.exports=Item=mongoose.model('tache',TacheShema)