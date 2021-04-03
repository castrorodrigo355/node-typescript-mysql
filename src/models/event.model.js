import { Schema, mongoose } from "../database/database";
import User from "./user.model";

const eventSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		// start: {
		// 	type: Date,
		// 	required: true,
		// },
		// end: {
		// 	type: Date,
		// 	required: true,
		// },
		user: {
			type: Schema.Types.ObjectId,
			ref: User,
		},
	},
	{
		versionKey: false,
	},
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
