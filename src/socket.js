import express from "express";
import socketIO from "socket.io";
import http from "http";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("port", process.env.LOCAL_SERVER_PORT);
app.use(express.static(__dirname + "/public"));

const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
	// console.log(`Client connected !!! - ID: ${socket.id}`);
	// socket.emit("Welcome-Message", {
	// 	Message: "Welcome to my server",
	// 	Date: new Date(),
	// });
	socket.on("message--to--server", (data) => {
		console.log(data);

		// socket.emit("message--from--server", data);
		io.emit("message--from--server", data);
	});
});

server.listen(5000, () => {
	console.log(`Example app listening at port: 5000`);
});
