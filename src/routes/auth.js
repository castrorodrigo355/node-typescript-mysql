import { Router } from "express";
import { validateJWT } from "../middlewares/jwt";
import { validateUserCreation } from "../middlewares/user";
import { loginUser, registerUser, revalidateToken } from "../controllers/auth";

const authRouter = Router();

authRouter.post("/register", validateUserCreation, registerUser);
authRouter.post("/login", loginUser);
authRouter.get("/renew", validateJWT, revalidateToken);

export default authRouter;
