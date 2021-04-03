import jwt from "jsonwebtoken";

export const validateJWT = (req, res, next) => {
	const token = req.header("x-token");
	if (!token) {
		return res.status(401).json({
			ok: false,
			message: "Token is missing",
		});
	}
	try {
		const payload = jwt.verify(token, "Eltraidor1");
		req.id = payload.id;
		req.name = payload.name;
	} catch (error) {
		console.log(error);
	}
	next();
};
