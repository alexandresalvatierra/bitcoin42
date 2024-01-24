import express from "express";
import { UserController } from "./presentation/controllers/user.controller";
const router = express.Router();
const userController = new UserController();

router.post("/", userController.create);

export default router;
