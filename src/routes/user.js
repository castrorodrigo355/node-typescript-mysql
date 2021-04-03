import { Router } from "express";

import {
	getUsers,
	getUserById,
	createUser,
	deleteUser,
	updateUser,
} from "../controllers/user";

const userRouter = Router();

// import { verifyToken } from "../middlewares/auth";
// import { userMiddleware } from "../middlewares/user";

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", createUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);
// router.get("/", verifyToken, userCtrl.getUsers);

export default userRouter;
