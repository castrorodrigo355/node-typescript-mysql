import jwt from "jsonwebtoken";

export const generateJWT = (id, name) => {
	return new Promise((resolve, reject) => {
		const payload = { id, name };
		const seed = "Eltraidor1";
		jwt.sign(
			payload,
			seed,
			{
				expiresIn: "2h",
			},
			(err, token) => {
				if (err) {
					console.log(err);
					reject("No se pudo generar el token");
				}
				resolve(token);
			},
		);
	});
};
