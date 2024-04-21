import express from "express";
import UserController from "../Controllers/UserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateUserRequest } from "../middleware/Validation";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, UserController.getCurrentUser);
router.post("/", jwtCheck, UserController.createCurrentUser);
router.put("/",jwtCheck, jwtParse, validateUserRequest, UserController.updateCurrentUser);

export default router;