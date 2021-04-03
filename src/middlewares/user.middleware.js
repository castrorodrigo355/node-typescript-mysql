// import { check, validationResult } from "express-validator";

export const validateUserCreation = (req, res, next) => {
	// const error = validationResult(req);
	const name = req.body.name;
	if (name.length < 4) {
		return res.status(500).json({ Error: "Name must contain 6 caracters min" });
	}
	next();
};
