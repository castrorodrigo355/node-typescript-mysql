import dotEnv from "dotenv";
dotEnv.config();

import Server from "./server";
const server = Server.init(3001)

server.start(() => {
    console.log("Server working on port: " + server.port)
})
