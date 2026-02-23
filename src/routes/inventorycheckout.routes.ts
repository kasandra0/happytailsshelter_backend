import { Router } from "express";
import * as inventoryCheckoutController from "../controllers/inventoryCheckout.controller.js";

const router = Router();

router.get("/", inventoryCheckoutController.getAll);
router.get("/:id", inventoryCheckoutController.getById);
router.post("/", inventoryCheckoutController.create);

export default router;
