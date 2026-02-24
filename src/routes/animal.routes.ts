import { Router } from "express";
import * as animalController from "../controllers/animal.controller.js";

const router = Router();

router.get("/", animalController.getAll);
router.get("/:id", animalController.getById);
router.post("/", animalController.create);
router.put("/:id", animalController.updateAnimal);
router.delete("/:id", animalController.deleteAnimal);

export default router;
