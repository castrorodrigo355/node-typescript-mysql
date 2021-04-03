import { Router } from "express";
import { validateJWT } from "../middlewares/jwt.middleware";
import { validateUserCreation } from "../middlewares/user.middleware";
import {
	loginUser,
	registerUser,
	revalidateToken,
} from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/register", validateUserCreation, registerUser);
authRouter.post("/login", loginUser);
authRouter.get("/renew", validateJWT, revalidateToken);

export default authRouter;
