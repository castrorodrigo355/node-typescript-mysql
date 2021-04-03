import User from "../models/user.model";

export const getUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		res.status(500).json({ Error: error });
	}
};

export const getUserById = async (req, res) => {
	const id = req.params.id;
	try {
		const userfound = await User.findById(id);
		res.json(userfound);
	} catch (error) {
		res.status(500).json({ Error: error });
	}
};

export const deleteUser = async (req, res) => {
	const id = req.params.id;
	try {
		const deletedUser = await User.findByIdAndDelete(id);
		res.json(deletedUser);
	} catch (error) {
		res.json({ Message: "Not User Created !!!" });
	}
};

export const updateUser = async (req, res) => {
	const id = req.params.id;
	try {
		const updatedUser = await User.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.json(updatedUser);
	} catch (error) {
		res.json({ Message: "Not User Created !!!" });
	}
};
