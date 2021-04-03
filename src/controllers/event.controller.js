import Event from "../models/event.model";
// import User from "../models/user.model";

export const getEvents = async (req, res) => {
	try {
		const events = await Event.find().populate("user");
		res.status(200).json(events);
	} catch (error) {
		res.status(500).json({ Error: error });
	}
};

export const createEvent = async (req, res) => {
	try {
		const user = req.id;
		const { title, description } = req.body;
		const event = new Event({ title, description, user });
		const eventSaved = await event.save();
		res.status(201).json({
			ok: true,
			eventSaved,
		});
	} catch (error) {
		res.status(500).json({ Error: error });
	}
};

export const getEventById = async (req, res) => {
	// const id = req.params.id;
	// try {
	// 	const userfound = await User.findById(id);
	// 	res.json(userfound);
	// } catch (error) {
	// 	res.status(500).json({ Error: error });
	// }
};

export const deleteEvent = async (req, res) => {
	// const id = req.params.id;
	// try {
	// 	const deletedUser = await User.findByIdAndDelete(id);
	// 	res.json(deletedUser);
	// } catch (error) {
	// 	res.json({ Message: "Not User Created !!!" });
	// }
};

export const updateEvent = async (req, res) => {
	// const id = req.params.id;
	// try {
	// 	const updatedUser = await User.findByIdAndUpdate(id, req.body, {
	// 		new: true,
	// 	});
	// 	res.json(updatedUser);
	// } catch (error) {
	// 	res.json({ Message: "Not User Created !!!" });
	// }
};
