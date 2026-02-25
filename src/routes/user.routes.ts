import { Router } from "express";
import * as userController from "../controllers/user.controller.js";

const router = Router();

router.get("/", userController.getAll);
router.get("/me", userController.getMe);
router.get("/:id", userController.getById);
router.put("/:id", userController.updateUser);

export default router;
