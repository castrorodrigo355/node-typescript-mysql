import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./routes/user.route";
import authRouter from "./routes/auth.route";
import eventRouter from "./routes/event.route";

const app = express();

app.set("port", process.env.LOCAL_SERVER_PORT);
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(`${process.env.SERVER_APP_URL_AUTH}`, authRouter);
app.use(`${process.env.SERVER_APP_URL_USERS}`, userRouter);
app.use(`${process.env.SERVER_APP_URL_EVENTS}`, eventRouter);

export default app;
