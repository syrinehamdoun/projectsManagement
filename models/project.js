const mongoose =require('mongoose')
const Schema=mongoose.Schema
const Clientt = require('../models/Client.module')

const ProjectShema= new Schema({
	_id: Schema.Types.ObjectId,

	client: {
		type: Schema.Types.ObjectId, 
		ref: "client"
	},
	description: {
		type: String,
	},
    remarque: {
        type: String,
    },
	type: {
        type: String,
    },
    status: {
        type: Number,
    },
	date_debut: {
        type: Date,
		default:Date.now
    },
	date_fin: {
        type: Date,
		default:Date.now
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
module.exports=Item=mongoose.model('Project',ProjectShema)