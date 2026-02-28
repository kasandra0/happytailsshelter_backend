import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", userController.getAll);
router.get("/me", requireAuth, userController.getMe);
router.get("/:id", userController.getById);
router.put("/:id", userController.updateUser);

export default router;
