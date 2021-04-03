import { Router } from "express";
import { validateJWT } from "../middlewares/jwt.middleware";
import { createEvent, getEvents } from "../controllers/event.controller";

const eventRouter = Router();

eventRouter.get("/", getEvents);
eventRouter.post("/", validateJWT, createEvent);
// eventRouter.get("/:id", getUserById);
// eventRouter.delete("/:id", deleteUser);
// eventRouter.put("/:id", updateUser);

export default eventRouter;
