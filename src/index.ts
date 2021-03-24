import "./database/database";
import Server from "./server";
import dotEnv from "dotenv";
dotEnv.config();

const server = Server.init(Number(process.env.LOCAL_SERVER_PORT))

server.start(() => {
    console.log("Server working on port: " + server.port)
})
