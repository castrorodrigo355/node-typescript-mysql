const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");
const router = require("./routes/user");
const app = express();
const port = 3000;
dotEnv.config();

// const userRouter = require("./routes/user");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(`${process.env.SERVER_APP_URL_USERS}`, userRouter);
app.use(`/api/v1/users`, router);
// app.use(`${process.env.SERVER_APP_URL_INIT}`, authRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
