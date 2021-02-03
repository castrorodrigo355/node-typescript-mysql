import Server from "./server";
import MySQL from "./mysql/mysql";

const server = Server.init(3000)

const mysql = new MySQL();

server.start(() => {
    console.log("Server working on port: " + server.port)
})