import { Router } from "express";
const router = Router();

import * as authCtrl from "../controllers/authLogin";

router.post("/", authCtrl.userLogin);

export default router;