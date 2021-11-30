const mongoose =require('mongoose')
const Schema=mongoose.Schema


const ClientShema= new Schema({
	_id: Schema.Types.ObjectId,
	nom: {
		type: String,
	},
    prenom: {
        type: String,
    },
    phone: {
        type: Number,
    },
	
	mail: {
		type: String,
	},
    deleted: {
		type: Boolean,
		default:0
	}


})

module.exports=Item=mongoose.model('client',ClientShema)