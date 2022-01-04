const mongoose =require('mongoose')
const Schema=mongoose.Schema


const PostShema= new Schema({
	_id: Schema.Types.ObjectId,
	title: {
		type: String,
	},	
	description: {
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
module.exports=Item=mongoose.model('post',PostShema)