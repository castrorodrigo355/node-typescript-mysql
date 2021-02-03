import { Router } from "express";
const router = Router();

import * as userCtrl from "../controllers/user";
import { verifyToken } from "../middlewares/auth";

// router.get("/", verifyToken, userCtrl.getUsers);
router.get("/", userCtrl.getUsers);
router.get("/:id", userCtrl.getUserById);
router.delete("/:id", userCtrl.deleteUser);
router.post("/", userCtrl.createUser);
router.put("/:id", userCtrl.updateUser);

export default router;