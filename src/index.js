import app from "./app";
import "./database/database";

app.listen(app.get("port"), () => {
	console.log(`Example app listening at http://localhost:${app.get("port")}`);
});
