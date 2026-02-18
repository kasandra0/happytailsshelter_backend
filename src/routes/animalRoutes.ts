import express from "express";
import {
  createAnimal,
  getAllAnimals,
  getAnimalById,
} from "../controllers/animalController.js";

const animalRouter = express.Router();

animalRouter.post("/", createAnimal);
animalRouter.get("/", getAllAnimals);
animalRouter.get("/:id", getAnimalById);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

export default animalRouter;
