import { Router } from "express";
import * as inventoryCheckoutController from "../controllers/inventoryCheckout.Controller.js"

const router = Router();

router.get("/", inventoryCheckoutController.getAll);
router.get("/:id", inventoryCheckoutController.getById);
router.post("/", inventoryCheckoutController.create);

export default router;
