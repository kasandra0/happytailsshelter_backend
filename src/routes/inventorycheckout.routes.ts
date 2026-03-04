import { Router } from "express";
import * as inventoryCheckoutController from "../controllers/inventoryCheckout.controller.js";

const router = Router();

router.get("/", inventoryCheckoutController.getAll);
router.get("/animal/:id", inventoryCheckoutController.getAllForAnimal);
router.get("/:id", inventoryCheckoutController.getById);
router.post("/", inventoryCheckoutController.create);
router.put("/:id", inventoryCheckoutController.updateInventoryCheckoutRecord);
router.delete(
  "/:id",
  inventoryCheckoutController.deleteInventoryCheckoutRecord
);

export default router;
