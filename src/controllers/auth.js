import User from "../models/user";
import bcrypt from "bcryptjs";
import { generateJWT } from "../helpers/jwt";

export const registerUser = async (req, res) => {
	const { name, email, password } = req.body;
	try {
		const userSearch = await User.findOne({ email });
		if (userSearch) {
			return res.status(500).json({
				ok: false,
				message: "This email is already used.",
			});
		}
		const salt = bcrypt.genSaltSync();
		const pass = bcrypt.hashSync(password, salt);
		const user = new User({ name, email, password: pass });
		const userSaved = await user.save();
		const token = await generateJWT(userSaved._id, userSaved.name);
		res.status(201).json({
			ok: true,
			user,
			token,
		});
	} catch (error) {
		res.status(500).json({ Error: error });
	}
};

export const loginUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		const validatePass = bcrypt.compareSync(password, user.password);
		if (!validatePass) {
			return res
				.status(400)
				.json({ ok: false, message: "Incorrect Password." });
		}
		const token = await generateJWT(user._id, user.name);
		res.status(201).json({
			ok: true,
			user,
			token,
		});
	} catch (error) {
		res.status(500).json({ Error: error });
	}
};

export const revalidateToken = async (req, res) => {
	const id = req.id;
	const name = req.name;
	const token = await generateJWT(id, name);
	res.json({
		ok: true,
		id,
		name,
		token,
	});
};
