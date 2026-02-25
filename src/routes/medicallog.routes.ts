import { Router } from "express";
import * as medicallogController from "../controllers/medicalLog.controller.js";

const router = Router();

router.get("/", medicallogController.getAll);
router.get("/:id", medicallogController.getById);
router.post("/", medicallogController.create);
router.put("/:id", medicallogController.updateMedicalLogRecord);
router.delete("/:id", medicallogController.deleteMedicalLogRecord);

export default router;
