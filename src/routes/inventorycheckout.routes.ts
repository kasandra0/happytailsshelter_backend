import { Router } from "express";
import * as inventoryCheckoutController from "../controllers/inventoryCheckout2.controller.js"

const router = Router();

router.get("/", inventoryCheckoutController.getAll);
router.get("/:id", inventoryCheckoutController.getById);
router.post("/", inventoryCheckoutController.create);
router.put("/", inventoryCheckoutController.updateInventoryCheckoutRecord);
router.delete("/", inventoryCheckoutController.deleteInventoryCheckoutRecord);

export default router;
