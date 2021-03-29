const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const { userRouter } = require("./routes/user");
const app = express();

app.set("port", process.env.LOCAL_SERVER_PORT);
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(`${process.env.SERVER_APP_URL_USERS}`, userRouter);
// app.use(`${process.env.SERVER_APP_URL_INIT}`, authRouter);

app.listen(app.get("port"), () => {
  console.log(`Example app listening at http://localhost:${app.get("port")}`);
});
