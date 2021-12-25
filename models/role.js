//  population and ref
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: { type: String },
  deleted: {
		type: Boolean,
		default:0
	}
});
const role = mongoose.model("role", roleSchema);

module.exports = { role };