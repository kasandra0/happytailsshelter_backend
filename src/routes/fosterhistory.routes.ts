import { Router } from "express";
import * as fosterhistoryController from "../controllers/fosterhistory.controller.js";

const router = Router();

router.get("/", fosterhistoryController.getAll);
router.get("/:id", fosterhistoryController.getById);
router.post("/", fosterhistoryController.create);

export default router;
