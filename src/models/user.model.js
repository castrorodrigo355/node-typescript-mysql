import { Schema, mongoose } from "../database/database";

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	},
);

const User = mongoose.model("User", userSchema);

export default User;
