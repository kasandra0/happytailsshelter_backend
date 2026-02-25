import { Router } from "express";
import * as medicallogController from "../controllers/medicalLog.controller.js";

const router = Router();

router.get("/", medicallogController.getAll);
router.get("/:id", medicallogController.getById);
router.post("/", medicallogController.create);

export default router;
