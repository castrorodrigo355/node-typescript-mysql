const express = require("express");
const userRouter = require("../controllers/user");
const router = express.Router();

// import { verifyToken } from "../middlewares/auth";
// import { userMiddleware } from "../middlewares/user";

router.get("/", userRouter.getUsers);
// router.get("/", verifyToken, userCtrl.getUsers);
/*
router.get("/:id", userRouter.getUserById);
router.delete("/:id", userRouter.deleteUser);
router.put("/:id", userRouter.updateUser);
router.post("/", userRouter.createUser);
*/

module.exports = router;
