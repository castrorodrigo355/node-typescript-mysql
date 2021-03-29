const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/user");
const userRouter = express.Router();

// import { verifyToken } from "../middlewares/auth";
// import { userMiddleware } from "../middlewares/user";

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", createUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);
// router.get("/", verifyToken, userCtrl.getUsers);

module.exports = { userRouter };
