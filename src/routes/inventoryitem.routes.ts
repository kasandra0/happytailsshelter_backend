import { Router } from "express";
import * as inventoryItemController from "../controllers/inventoryItem.controller.js";

const router = Router();

router.get("/", inventoryItemController.getAll);
router.get("/:id", inventoryItemController.getById);
router.post("/", inventoryItemController.create);

export default router;
