import { Router } from "express";
import {
	getUsers,
	getUserById,
	deleteUser,
	updateUser,
} from "../controllers/user";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);

export default userRouter;
