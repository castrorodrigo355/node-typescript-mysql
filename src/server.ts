import express from 'express';
import morgan from "morgan";
import cors from "cors";
import userRouter from "./routes/user";
import authRouter from "./routes/auth";

export default class Server {
    public app: express.Application;
    public port: number;

    constructor(p: number) {
        this.port = p;
        this.app = express();
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(`${process.env.SERVER_APP_URL_USERS}`, userRouter)
        this.app.use(`${process.env.SERVER_APP_URL_INIT}`, authRouter)
    }

    static init(p: number) {
        return new Server(p)
    }

    start(callback: any) {
        this.app.listen(this.port, callback)
    }
}
