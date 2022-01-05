const mongoose =require('mongoose')
const Schema=mongoose.Schema

const TimesheetShema= new Schema({
	_id: Schema.Types.ObjectId,

	employee: {
		type: String,
	},
    project: {
		type: Schema.Types.ObjectId, 
		ref: "project"
	},
	description: {
		type: String,
	},
	date: {
        type: Date,
		default:Date.now
    },
	starttime: {
        type: String,
    },
	endtime: {
		type: String,
	},
    deleted: {
		type: Boolean,
		default:0
	}


})
module.exports=Item=mongoose.model('Timesheet',TimesheetShema)