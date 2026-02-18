import express from "express";
import {
  createAnimal,
  deleteAnimal,
  getAllAnimals,
  getAnimalById,
  updateAnimal,
} from "../controllers/animalController.js";

const animalRouter = express.Router();

animalRouter.post("/", createAnimal);
animalRouter.get("/", getAllAnimals);
animalRouter.get("/:id", getAnimalById);
animalRouter.put("/:id", updateAnimal);
animalRouter.delete("/:id", deleteAnimal);

export default animalRouter;
