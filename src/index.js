// import app from "./app";
// import "./database/database";

import { fizzbuzz, getCount, getUsers } from "./functions/functions";

// app.listen(app.get("port"), () => {
// 	console.log(`Example app listening at http://localhost:${app.get("port")}`);
// });

(async () => {
	// const result = fizzbuzz(9);
	// console.log("RESULTADO: ", result);

	const users = await getUsers();
	console.log("USERS: ", users.length);
	getCount(users);
})();
