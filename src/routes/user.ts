import { Router } from "express";
const router = Router();

import * as userCtrl from "../controllers/user";
// import { verifyToken } from "../middlewares/auth";
// import { userMiddleware } from "../middlewares/user";

router.get("/",  userCtrl.getUsers);
// router.get("/", verifyToken, userCtrl.getUsers);
router.get("/:id", userCtrl.getUserById);
router.delete("/:id", userCtrl.deleteUser);
router.put("/:id", userCtrl.updateUser);
router.post("/", userCtrl.createUser);

export default router;